import "../App.css";

import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";

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
          <Fade Top delay={6000} duration={2000}>
            <h1
              className="content-title-project delay-1 hover-animate"
              style={{
                zIndex: 6,
                fontFamily: "Kaushan Script",
                position: size.width > 980 && "absolute",
                top: size.width > 980 && "1%",
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

          <Fade left delay={200} cascade>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 100,
                margin: size.width > 980 ? "5% 2%" : "2% 0",
                fontFamily: "Roboto",
                width: size.width > 980 && "50%",
              }}
            >
              <span>
                a{" "}
                <span style={{ color: "#c41c1c", fontWeight: "500" }}>
                  B.Sc Software Engineer
                </span>{" "}
                and{" "}
                <span style={{ color: "#c41c1c", fontWeight: "500" }}>
                  Full-Stack Developer
                </span>{" "}
                with two years of hands-on experience in Web and Mobile
                applications development, in multiple languages and frameworks,
                both in front and back ends.
                <br />
                <br />
                Programming is my passion and my hobby. I knew since childhood
                that being a programmer is my future dream, and now, after 4
                years of academic studies and 2 years of self-learning and
                freelancing, I am eager to fulfill it.
                <br />
                <br />
                So if you look for a passionate developer to join your team,
                I'll be{" "}
              </span>
              <span style={{ color: "#c41c1c", fontWeight: "500" }}>
                more than happy
              </span>{" "}
              to contact!
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
