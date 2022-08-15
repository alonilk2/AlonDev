import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import Fade from "react-reveal/Fade";
import "../../App.css";
import useWindowSize from "../../Hooks/useWindowSize";
import Github from "../../Images/github.png";
import { TorgateStackRow } from "./TechStackRow";

function Torgate(props) {
  const size = useWindowSize();

  const sideColumn = (
    <div
      className="col-3"
      style={{
        margin: size.width > 980 ? "2% 4%" : "3% 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Fade right when={props.state}>
        <h1
          className="content-title-project delay-1 hover-animate"
          style={{ position: "unset", height: "unset", zIndex: 6 }}
        >
          <span>T</span>
          <span>o</span>
          <span>r</span>
          <span>g</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
        </h1>
      </Fade>
      <Fade left when={props.state} delay={400}>
        <p
          className="description"
          style={{ position: "unset", height: "unset" }}
        >
          Torgate is the most modern, flexible and sophisticated appointment scheduling system in Israel for small-medium businesses.
          Simply register, add services and providers, and get a custom scheduling landing page for your clients.
        </p>
      </Fade>
      {TorgateStackRow(props)}
      <div className="project-buttons">
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginRight: "1%"
          }}
          href={"https://torgate.herokuapp.com"}
        >
          <button className="content-title-visit button-red delay-1 col ">
            Visit Torgate
          </button>
        </a>
        <a
          style={{
            textAlign: "center",
            width: "100%",
            color: "transparent",
            marginLeft: "1%"
          }}
          href={"https://github.com/alonilk2/Torgate---React-18-Java-Spring-Boot-MySQL-MaterialUI"}
        >
          <button className=" button content-title-visit-git">
            <img src={Github} className="github-btn-icon" alt="github"></img>GitHub Repository
          </button>
        </a>
      </div>
    </div>
  );
  const imageCropperMobile = (
    <div class="image-cropper cf4a">
      <img
        src={"https://github.com/alonilk2/map1/blob/main/torgate1.png?raw=true"}
        alt=""
      ></img>
    </div>
  );
  const imageCropper = (
    <div class="image-cropper cf4a">
      <CrossfadeCarousel
        interval={2000}
        transition={1000}
        images={[
          "https://github.com/alonilk2/map1/blob/main/torgate1.png?raw=true",
          "https://github.com/alonilk2/map1/blob/main/torgate2.png?raw=true",
          "https://github.com/alonilk2/map1/blob/main/torgate3.png?raw=true",
          "https://github.com/alonilk2/map1/blob/main/torgate4.png?raw=true"
        ]}
      />
    </div>
  );
  return (
    <>
      <section
        className={props.className}
        style={{ zIndex: props.state ? 4 : 0 }}
      >
        <div className="content-body-project">
          {sideColumn}
          {size.width > 980 ? imageCropper : imageCropperMobile}
        </div>
      </section>
    </>
  );
}

export default Torgate;
