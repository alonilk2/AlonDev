import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import useWindowSize from "../Hooks/useWindowSize";

export default function NavBar(props) {
  const size = useWindowSize();
  const [toggle, setToggle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  let scrollState = props.scrollState;
  console.log(scrollState);
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 6300);
  }, []);

  const desktopNavbar = (
    <Navbar expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-container">
          <div className="col left-menu">
            {showTitle && (
              <h3 className="title custom-animation-gradient">
                Alon Barenboim
              </h3>
            )}
          </div>
          <div className="col right-menu">
            <Nav.Link
              href="/"
              className="navbar-btn-txt"
              style={{
                color: scrollState < 0 && scrollState > -4 ? "#f443dc" : "",
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link href="/" className="navbar-btn-txt">
              About
            </Nav.Link>
            <Nav.Link
              href="/"
              className="navbar-btn-txt"
              style={{ color: scrollState === -4 ? "#f443dc" : "" }}
            >
              Contact
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  const mobileNavbar = (
    <Navbar expanded={toggle} sticky="top" expand="lg" variant="dark">
      <Container fluid>
        <Offcanvas.Header closeButton>
          <h3 className="title custom-animation-gradient pos-mobile">
            Alon Barenboim
          </h3>{" "}
        </Offcanvas.Header>
      </Container>
    </Navbar>
  );

  if (size.width > 768) {
    return desktopNavbar;
  } else return mobileNavbar;
}
