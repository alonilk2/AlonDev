import "../App.css";
import Roll from "react-reveal/Roll";

import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";
import { sizeWidth } from "@mui/system";

function About(props) {
  const size = useWindowSize();

  const imageCropper = (
    <div
      className="col image-cropper cf4a"
      style={{
        borderRadius: "50%",
        marginRight: "3%",
        width: "unset",
      }}
    >
      <img
        className="about-cropper"
        src={"https://alonilk2.github.io/map1/alon.jpg"}
        alt="About"
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  return (
    <>
      <section
        className={props.className}
        style={{
          zIndex: props.state ? 4 : 0,
          padding: size.width < 980 && "5%",
          flexDirection: size.width < 980 && "column",
        }}
      >
        <div
          className="col-5 about-info"
          style={{ margin: size.width > 980 ? "5%" : "5% 0" }}
        >
          <Fade when={props.state}>
            <h1
              className="content-title-project delay-1 hover-animate"
              style={{
                zIndex: 6,
                fontFamily: "Kaushan Script",
                position: size.width > 980 && "absolute",
                top: size.width > 980 && "0%",
                left: size.width > 980 && "10%",
              }}
            >
              <span>H</span>
              <span>e</span>
              <span>y</span>
              <span>!</span> <span>I'</span>
              <span>m</span> <span>A</span>
              <span>l</span>
              <span>o</span>
              <span>n</span>
            </h1>
          </Fade>

          <Fade delay={500} duration={1500} when={props.state} cascade>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 100,
                margin: size.width > 980 ? "3% 5%" : "2% 0",
                fontFamily: "Roboto",
                width: size.width > 980 && "35%",
              }}
            >
              <span>
                <span style={{ color: "#c41c1c", fontWeight: "400" }}>
                  B.Sc Software Engineer
                </span>{" "}
                and{" "}
                <span style={{ color: "#c41c1c", fontWeight: "400" }}>
                  Full Stack Developer
                </span>{" "}
                experienced with front and back end applications design and
                development, and equipped with tons of passion to create
                beautiful code and amazing UIs.
                <br />
                My tech stack contains React.js, Node.js, Express.js, React
                Native, SQL/NoSQL, TypeScript, MUI, Sequlize.js and more.
                <br />
                <br />
                Coding is my passion. When I was little kid, I recieved my first
                WinME PC as a gift, and got facinated by the fact the I could
                create a webpage just by dragging random components in Microsoft
                FrontPage (RIP). <br /> More than 20 years later, after
                acquiring my first degree in Software Engineering and gaining
                experience as a (real &#128517;) Full Stack developer, I'm
                willing to join a company where I could contribute to and grow
                at, as a Full Stack / Front / Back End Engineer.
                <br />
                <br />
                So if you look for an amazingly passionate developer to join
                your team, I'll be{" "}
              </span>
              <span style={{ color: "#c41c1c", fontWeight: "400" }}>
                more than happy
              </span>{" "}
              <span>to contact!</span>
            </p>
          </Fade>
        </div>
        {size.width < 980 && (
          <Fade bottom delay={300} cascade>
            <a
              href={"https://alonilk2.github.io/map1/alonbarenboimcv.pdf"}
              className="navbar-btn-txt content-title-visit resume-btn"
            >
              Get My Resume
            </a>
          </Fade>
        )}{" "}
        {imageCropper}
      </section>
    </>
  );
}

export default About;
