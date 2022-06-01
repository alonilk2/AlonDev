import Fade from "react-reveal/Fade";
import "../../App.css";
import useWindowSize from "../../Hooks/useWindowSize";
import Github from "../../Images/github.png";
import { SimonSaysStackRow } from "./TechStackRow";

function IMBarber(props) {
  const size = useWindowSize();

  const sideColumn = (
    <div
      className="col-3"
      style={{
        margin: size.width > 980 ? "2% 4%" : "5% 0",
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
          <span>S</span>
          <span>i</span>
          <span>m</span>
          <span>o</span>
          <span>n</span>
          <span>S</span>
          <span>a</span>
          <span>y</span>
          <span>s</span>
        </h1>
      </Fade>
      <Fade left when={props.state} delay={400}>
        <p
          className="description"
          style={{ position: "unset", height: "unset" }}
        >
          Simon Says game, made using React Native, TypeScript, Redux
        </p>
      </Fade>
      {SimonSaysStackRow(props)}
      <div className="project-buttons">
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginRight: "1%",
          }}
          href={"https://alonilk2.github.io/map1/SimonSays.apk"}
        >
          <button className="content-title-visit button-red delay-1 col ">
            Download APK
          </button>
        </a>{" "}
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginLeft: "1%",
            color: "transparent",
          }}
          href={"https://github.com/alonilk2/Simon-Says-Game-React-Native-TypeScript"}
        >
          <button className=" button content-title-visit-git">
            <img src={Github} className="github-btn-icon"></img>Github
            Repository
          </button>
        </a>{" "}
      </div>{" "}
    </div>
  );
  const imageCropper = (
    <div
      class="image-cropper cf4a"
      style={{
        borderRadius: "25px",
        height: size.width < 980 && "420px",
        marginRight: "3%",
      }}
    >
      <img
        src={"https://alonilk2.github.io/map1/simonsays.jpg"}
        alt=""
        className="project-img-mobile"
      ></img>
      <img
        src={"https://alonilk2.github.io/map1/simonsays1.jpg"}
        alt=""
        className="project-img-mobile"
      ></img>
    </div>
  );

  const imageCropperMobile = (
    <div class="image-cropper cf4a">
      <img
        src={"https://alonilk2.github.io/map1/abdev/simonsays.jpg"}
        alt=""
        className="project-img-mobile"
      ></img>
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

export default IMBarber;
