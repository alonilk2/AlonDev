import "../App.css";

import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";

function About(props) {
  const size = useWindowSize();

  const imageCropper = (
    <div
      className="col image-cropper cf4a"
      style={size.width > 980 ? styles.cropper : styles.cropperMobile} 
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
          padding: size.width < 980 && "0% 5%",
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
                position: size.width > 980 && "absolute",
                top: size.width > 980 && "8%",
                left: size.width > 980 && "14%",
              }}
            >
              <h5 style={{ margin: "0 5px 0 0", color: "#FF416C" }}>ABOUT</h5>
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
                margin: size.width > 980 ? "7% 9%" : "2% 0",
                width: size.width > 980 && "35%",
              }}
            >
              <span>
                <span style={{ color: '#FF416C', fontWeight: "400" }}>
                  Software Engineer{" "}
                </span>
                graduate and{" "}
                <span style={{ color: '#FF416C', fontWeight: "400" }}>
                  Full Stack Developer
                </span>
                , experienced with front and back end development of web and
                mobile applications, and equipped with tons of passion to create
                beautiful code and amazing UIs.
                <br />
                <br />
                My tech stack contains React.js, Node.js, Spring Boot,
                Express.js, React Native, SQL/NoSQL, TypeScript, MUI,
                Sequlize.js and more. I also have practical experience in C,
                C++, Java and Python.
                <br />
                <br />
                So if you look for an{" "}
                <span style={{ color: '#FF416C', fontWeight: "400" }}>
                  amazingly passionate developer
                </span>{" "}
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

        {size.width < 980 ? (
          <Fade left>{imageCropper}</Fade>
        ) : (
          <>{imageCropper}</>
        )}
      </section>
    </>
  );
}

const styles = {
  cropper: {
    borderRadius: "50%",
    marginRight: "10%",
    width: "unset",
  },
  cropperMobile: {
    borderRadius: "50%",
    width: "100%",
  }
}

export default About;
