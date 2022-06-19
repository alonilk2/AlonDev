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
          <Fade right when={props.state}>
            <h1
              className="content-title-project hover-animate"
              style={{
                zIndex: 6,
                fontFamily: "GT Walsheim Pro",
                fontStyle: "italic",
                position: size.width > 980 && "absolute",
                top: size.width > 980 && "0%",
                left: size.width > 980 && "10%",
              }}
            >
              <span>H</span>
              <span>i</span>
              <span>!</span> <span>I'</span>
              <span>m</span> <span>A</span>
              <span>l</span>
              <span>o</span>
              <span>n</span>
            </h1>
          </Fade>

          <Fade left when={props.state}>
            <p
              style={{
                fontSize: "18px",
                fontFamily: "GT Walsheim Pro",
                fontWeight: 200,
                margin: size.width > 980 ? "3% 5%" : "2% 0",
                width: size.width > 980 && "35%",
              }}
            >
              <span>
                I'm a graduated
                <span style={{ color: "#c41c1c", fontWeight: "400" }}>
                  {" "}
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
                <br />
                My tech stack contains React.js, Node.js, Express.js, React
                Native, SQL/NoSQL, TypeScript, MUI, Sequlize.js and more. I also
                have hands on experience in C, C++, Java and Python.
                <br />
                <br />
                So if you look for an{" "}
                <span style={{ color: "#c41c1c", fontWeight: "400" }}>
                  amazingly passionate developer{" "}
                </span>
                to join your team, I'll be more than happy to contact!
              </span>
            </p>
          </Fade>
        </div>
        <Fade right>
          {size.width < 980 && (
            <a
              href={"https://alonilk2.github.io/map1/alonbarenboimcv.pdf"}
              className="navbar-btn-txt content-title-visit resume-btn button-red  "
              style={{ padding: "0 2%" }}
            >
              Get My Resume
            </a>
          )}
        </Fade>

        {size.width < 980 ? <Fade left>{imageCropper}</Fade> : <>{ imageCropper }</>}
      </section>
    </>
  );
}

export default About;
