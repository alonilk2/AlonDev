import Fade from "react-reveal/Fade";
import "../App.css";
import Github from '../Images/github.png';
import useWindowSize from "../Hooks/useWindowSize";
import { CelluStackRow } from "./TechStackRow";
function Cellu(props) {
  let size = useWindowSize();

  const sideColumn = (
    <div
      className="col-3"
      style={{
        margin: size.width > 768 ? "2% 5%" : "5% 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <h1
        className="content-title-project delay-1 hover-animate"
        style={{ position: "unset", height: "unset", zIndex: 6 }}
      >
        <span>C</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>u</span> <span>5</span>
        <span>G</span>
      </h1>
      <Fade top when={props.state} delay={400}>
        <p
          className="description"
          style={{ position: "unset", height: "unset" }}
        >
          Cellu is an Android application which allows users to locate cellular
          antennas in Israel. Cellu displays antennas located close to you
          according to the current device's location, obtained by the device's
          GPS module. Users can also locate nearby antennas based on a specific
          address that being chosen from a list of all streets and cities in
          Israel.
        </p>{" "}
      </Fade>
      {CelluStackRow(props)}
      <Fade left when={props.state} delay={1300}>
        <a
          style={{ zIndex: 2, position: "unset", height: "unset" }}
          href="https://play.google.com/store/apps/details?id=com.cellu&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            width={280}
            style={{ marginTop: "2%" }}
          />
        </a>
      </Fade>
      <a
          style={{
            textAlign: "center",
            width: "50%",
            marginTop: '2%',    color: 'transparent', zIndex: 6
          }}
          href={"https://github.com/alonilk2/Cellu5G"}
        >
          <button className="content-title-visit-git delay-1 col">
            <img src={Github} style={{ width: "40px", minWidth: "20px" }}></img>Github Repository
          </button>
        </a>{" "}
    </div>
  );

  const imageCropper = (
    <div
      class="image-cropper cf4a"
      style={{
        borderRadius: "25px",
        height: size.width < 768 && "420px",
        marginRight: "3%",
      }}
    >
      <img
        src={"https://alonilk2.github.io/map1/1.jpg"}
        alt=""
        className="project-img-mobile"
      ></img>
      <img
        src={"https://alonilk2.github.io/map1/2.jpg"}
        alt=""
        className="project-img-mobile"
      ></img>
      <img
        src={"https://alonilk2.github.io/map1/3.png"}
        alt=""
        className="project-img-mobile"
      ></img>
    </div>
  );

  const imageCropperMobile = (
    <div class="image-cropper cf4a">
      <img
        src={"https://alonilk2.github.io/map1/abdev/1.jpg"}
        alt=""
        className="project-img-mobile"
      ></img>
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
          {size.width > 768 ? imageCropper : imageCropperMobile}
        </div>
      </section>
    </>
  );
}

export default Cellu;

