import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import Fade from "react-reveal/Fade";
import "../../App.css";
import useWindowSize from "../../Hooks/useWindowSize";
import Github from "../../Images/github.png";
import { IMBarberStackRow } from "./TechStackRow";

function IMBarber(props) {
  const size = useWindowSize();

  const sideColumn = (
    <div
      className="col-4"
      style={{
        margin: size.width > 980 ? "2% 4%" : "5% 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Fade left when={props.state}>
        <h1
          className="content-title-project delay-1 hover-animate"
          style={{ position: "unset", height: "unset", zIndex: 6 }}
        >
          <span>I</span>
          <span>M.</span>
          <span>B</span>
          <span>a</span>
          <span>r</span>
          <span>b</span>
          <span>e</span>
          <span>r</span>
        </h1>
      </Fade>
      <Fade top when={props.state} delay={400}>
        <p
          className="description"
          style={{ position: "unset", height: "unset" }}
        >
          IM.Barber is an online store and corporate website. This project
          includes online store management system with orders, users and
          products management, Paypal Checkout, custom branding and SEO, all
          made originally according to customer's requirements.
        </p>
      </Fade>
      {IMBarberStackRow(props)}
      <div className="project-buttons">
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginRight: "1%",
          }}
          href={"https://imbarber.com"}
        >
          <button className="content-title-visit button-red delay-1 col ">
            Visit IM.Barber
          </button>
        </a>{" "}
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginLeft: "1%",
            color: "transparent",
          }}
          href={"https://github.com/alonilk2/IM.Barber"}
        >
          <button className=" button content-title-visit-git">
            <img src={Github} className="github-btn-icon"></img>Github Repository
          </button>
        </a>{" "}
      </div>{" "}
    </div>
  );
  const imageCropperMobile = (
    <div class="image-cropper cf4a">
      <img
        src={"https://alonilk2.github.io/map1/abdev/barber1.jpg"}
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
          "https://alonilk2.github.io/map1/barber2.png",
          "https://alonilk2.github.io/map1/barber1.png",
          "https://alonilk2.github.io/map1/barber3.png",
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

export default IMBarber;
