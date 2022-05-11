import "../App.css";

import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";

function About(props) {
  const size = useWindowSize();

  const imageCropperMobile = (
    <div className="image-cropper cf4a">
      <img src={"https://alonilk2.github.io/map1/abdev/About.png"} alt=""></img>
    </div>
  );
  const imageCropper = (
    <div
      className="image-cropper cf4a myfilter"
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
        style={{ zIndex: props.state ? 4 : 0 }}
      >
        <div className="about-info col-5">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h1
              className="content-title-project delay-1 hover-animate"
              style={{ position: "unset", height: "unset", zIndex: 6, fontFamily: "Kaushan Script" }}
            >
              <span>H</span>
              <span>e</span>
              <span>y</span>
              <span>!</span> <span>I'</span>
              <span>m</span> <span>A</span>
              <span>l</span>
              <span>o</span>
              <span>n</span>
              <p
                style={{ fontSize: "20px", fontWeight: 300, margin: "2%",fontFamily: "Roboto" }}
              >
                a{" "}
                <span style={{ color: "#f443dc" }}>B.Sc Software Engineer</span>{" "}
                and{" "}
                <span style={{ color: "#f443dc" }}>Full-Stack Developer</span>{" "}
                with two years of hands-on experience in Web and Mobile
                applications development, in multiple languages and frameworks,
                both in front and back ends.
                <br />
                <br />
                Programming is my passion and my hobby. I knew Since childhood
                that being a programmer is my dream, and now, after 4 years of
                academic studies and 2 years of self-learning and freelancing, I
                am eager to fulfill it.
                <br />
                <br />
                So if you look for a passionate developer to join your team,
                I'll be{" "}
                <span style={{ color: "#f443dc" }}>more than happy</span> to
                contact!
              </p>
            </h1>
          </div>
        </div>
        {imageCropper}
      </section>
    </>
  );
}

export default About;
