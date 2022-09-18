import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import useWindowSize from "../Hooks/useWindowSize";

const alonTitle = <h1
  className="title custom-animation-gradient hover-animate"
  style={{
    position: "unset",
    height: "unset",
    whiteSpace: "nowrap",
  }}
>
  <b style={{ fontWeight: 600 }}>
    <span>A</span>
    <span>l</span>
    <span>o</span>
    <span>n</span>
  </b>
  <b style={{ fontWeight: 100 }}>
    <span>B</span>
    <span>a</span>
    <span>r</span>
    <span>e</span>
    <span>n</span>
    <span>b</span>
    <span>o</span>
    <span>i</span>
    <span>m.</span>
  </b>
</h1>;

export default function NavBar(props) {
  const size = useWindowSize();
  const [showTitle, setShowTitle] = useState(false);
  let scrollState = props.scrollState;

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 6300);
  }, []);

  const desktopNavbar = (
    <Navbar expand="lg" variant="dark">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-container">
          <div className="col-3 left-menu">
            {showTitle && alonTitle}
          </div>
          <div className="col right-menu">
            <Nav.Link
              onClick={() => props.setPageScrollState(-1)}
              style={{ color: scrollState === -1 ? "#FF416C" : "" }}
              className="navbar-btn-txt"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => props.setPageScrollState(-2)}
              className="navbar-btn-txt"
              style={{
                color: scrollState < -1 && scrollState > -2 ? "#FF416C" : "",
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => props.setPageScrollState(-3)}
              className="navbar-btn-txt"
              style={{ color: scrollState === -3 ? "#FF416C" : "" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href={
                "https://github.com/alonilk2/map1/raw/main/Alon%20Barenboim%20-%20Full%20Stack%20Engineer%20CV.docx"
              }
              className="resume-btn button-red-resume"
            >
              Get My Resume
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  const mobileNavbar = (
    <Navbar sticky="top" expand="lg" variant="dark">
      <Container fluid>
        <Offcanvas.Header>
          {alonTitle}
        </Offcanvas.Header>
      </Container>
    </Navbar>
  );
  if (size.width > 980) {
    return desktopNavbar;
  } else return mobileNavbar;
}
