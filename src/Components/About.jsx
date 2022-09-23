import "../App.css";
import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";
import { Zoom } from "react-reveal";

function About(props) {
  const size = useWindowSize();

  const title = (
    <h1
      className="content-title-project hover-animate"
      style={styles.title}
    >
      <h5 className="about-subtitle">ABOUT</h5>
      <span>H</span>
      <span>i</span>
      <span>!</span> <span>I'</span>
      <span>m</span> <span>A</span>
      <span>l</span>
      <span>o</span>
      <span>n</span>
    </h1>
  );
  return (
    <section
      className={props.className}
      style={{
        zIndex: props.state ? 4 : 0,
        padding: size.width < 980 && "0% 5%",
        flexDirection: size.width < 980 && "column",
        margin: size.width < 980 && '10% 0 55% 0'
      }}
    >
      <div
        className="col-5 about-info"
        style={{ margin: size.width > 980 ? "5%" : "5% 0" }}
      >
        <Zoom when={props.state}>
          <div className="about-title">
            {size.width <= 980 && (
              <>
                <img
                  className="about-cropper"
                  src={"https://alonilk2.github.io/map1/alon.jpg"}
                  alt="About"
                  style={styles.cover}
                />
                {title}
              </>
            )}
          </div>
          <div className="about-description">
            {size.width > 980 && title}
            <span>
              Graduate Software Engineer and Full Stack Developer,
              highly experienced with both front and back end development of web and mobile
              applications, and equipped with tons of passion to create
              beautiful code and amazing UIs.
              <br />
              <br />
              My tech stack contains React.js, React Native, Node.js, Spring Boot, Express.js,
              SQL/NoSQL, TypeScript, MaterialUI and more. <br />I
              also have comprehensive experience in C, C++, Java and Python.
              <br />
              <br />
              So if you look for an{" "}
              <span style={styles.bolder}>
                amazingly passionate developer
              </span>{" "}
              to join your team, I'll be more than happy to contact!
            </span>
          </div>
        </Zoom>
      </div>
      {size.width > 980 && (
        <img
          className="about-cropper"
          src={"https://alonilk2.github.io/map1/alon.jpg"}
          alt="About"
          style={styles.cover}
        />
      )}
      {size.width < 980 && (
        <Fade right>
          <a
            href={"https://alonilk2.github.io/map1/alonbarenboimcv.pdf"}
            className="navbar-btn-txt content-title-visit resume-btn button-red  "
            style={styles.padding2}
          >
            Get My Resume
          </a>
        </Fade>
      )}
    </section>
  );
}

const styles = {
  title: {
    zIndex: 6,
    fontFamily: "GT Walsheim Pro",
  },
  cover: { objectFit: "cover" },
  bolder: { color: "#ff4b2b", fontWeight: "400" },
  padding2: { padding: "0 2%" }
};

export default About;
