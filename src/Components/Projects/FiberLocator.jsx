import "../../App.css";
import Github from "../../Images/github.png";
import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import Fade from "react-reveal/Fade";
import useWindowSize from "../../Hooks/useWindowSize";
import { FiberLocatorStackRow } from "./TechStackRow";

function FiberLocator(props) {
  const size = useWindowSize();

  const imageCropperMobile = (
    <div class="image-cropper cf4a">
      <img src={"https://alonilk2.github.io/map1/fiber1.jpg"} alt=""></img>
    </div>
  );
  const imageCropper = (
    <div class="image-cropper cf4a">
      <CrossfadeCarousel
        interval={2000}
        transition={1000}
        images={[
          "https://alonilk2.github.io/map1/fiber.jpg",
          "https://alonilk2.github.io/map1/fiber1.jpg",
        ]}
      />
    </div>
  );
  const sideColumn = (
    <div
      className="col-3"
      style={{
        margin: size.width > 950 ? "2% 5%" : "5% 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Fade left duration={2000}>
        <h1
          className="content-title-project delay-1 hover-animate"
          style={{ position: "unset", height: "unset", zIndex: 6 }}
        >
          <span>F</span>
          <span>i</span>
          <span>b</span>
          <span>e</span>
          <span>r</span>
          <span>L</span>
          <span>o</span>
          <span>c</span>
          <span>a</span>
          <span>t</span>
          <span>o</span>
          <span>r</span>
        </h1>
      </Fade>
      <Fade top when={props.state} delay={400}>
        <p
          className="description"
          style={{ position: "unset", height: "unset" }}
        >
          FiberLocator is a web application allowing users to run a fiber optics
          infrustructre availability check in their area, in multiple internet
          companies in Israel simultaneously.
        </p>{" "}
      </Fade>
      {FiberLocatorStackRow(props)}
      <div className="project-buttons" style={{ zIndex: 6 }}>
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginRight: "1%",
          }}
          href={"http://fiberlocate.herokuapp.com/"}
        >
          <button className="content-title-visit button-red delay-1 col ">
            Enter App
          </button>
        </a>{" "}
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginLeft: "1%",
            color: "transparent",
          }}
          href={"https://github.com/alonilk2/FiberLocator"}
        >
          <button className=" button content-title-visit-git">
            <img src={Github} style={{ width: "40px" }}></img>Github Repository
          </button>
        </a>{" "}
      </div>
    </div>
  );
  return (
    <>
      <section
        className={props.className}
        style={{ marginTop: 0, zIndex: props.state ? 4 : 0 }}
      >
        <div className="content-body-project">
          {sideColumn}
          {size.width > 980 ? imageCropper : imageCropperMobile}
        </div>
      </section>
    </>
  );
}

export default FiberLocator;
