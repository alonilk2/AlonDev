import "../App.css";
import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";

function About(props) {
  const size = useWindowSize();

  const title = (
    <h1
      className="content-title-project hover-animate"
      style={{
        zIndex: 6,
        fontFamily: "GT Walsheim Pro",
      }}
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
          <Fade left when={props.state}>
            <div className="about-title">
              {size.width <= 980 && (
                <>
                  <img
                    className="about-cropper"
                    src={"https://alonilk2.github.io/map1/alon.jpg"}
                    alt="About"
                    style={{ objectFit: "cover" }}
                  />
                  {title}
                </>
              )}
            </div>
            <div className="about-description">
              {size.width > 980 && title}
              <span>
                Software Engineering graduate and Full Stack Developer,
                experienced with front and back end development of web and
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
                <span style={{ color: "#FF416C", fontWeight: "400" }}>
                  amazingly passionate developer
                </span>{" "}
                to join your team, I'll be more than happy to contact!
              </span>
            </div>
          </Fade>
        </div>
        {size.width > 980 &&<img
          className="about-cropper"
          src={"https://alonilk2.github.io/map1/alon.jpg"}
          alt="About"
          style={{ objectFit: "cover" }}
        />}
        {size.width < 980 && (
          <Fade right>
            <a
              href={"https://alonilk2.github.io/map1/alonbarenboimcv.pdf"}
              className="navbar-btn-txt content-title-visit resume-btn button-red  "
              style={{ padding: "0 2%" }}
            >
              Get My Resume
            </a>
          </Fade>
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
  },
};

export default About;
