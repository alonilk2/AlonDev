import "../../App.css";
import Github from "../../Images/github.png";
import Fade from "react-reveal/Fade";
import useWindowSize from "../../Hooks/useWindowSize";
import { CompoundStackRow } from "./TechStackRow";

function Compound(props) {
  const size = useWindowSize();

  const imageCropperMobile = (
    <div class="image-cropper cf4a">
      <img
        src={"https://alonilk2.github.io/map1/abdev/compound.png"}
        alt=""
      ></img>
    </div>
  );
  const imageCropper = (
    <div
      class="image-cropper cf4a"
      style={{
        borderRadius: "25px",
        marginRight: "3%",
      }}
    >
      <img
        src={"https://alonilk2.github.io/map1/compound.png"}
        alt="Compound"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
  const sideColumn = (
    <div
      className="col-3"
      style={{
        margin: size.width > 980 ? "2% 5%" : "5% 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Fade left when={props.state} duration={1000}>
        <h1
          className="content-title-project delay-1 hover-animate"
          style={{ position: "unset", height: "unset", zIndex: 6 }}
        >
          <span>C</span>
          <span>o</span>
          <span>m</span>
          <span>p</span>
          <span>o</span>
          <span>u</span>
          <span>n</span>
          <span>d</span>
        </h1>{" "}
      </Fade>
      <Fade top when={props.state} delay={400}>
        <p
          className="description"
          style={{ position: "unset", height: "unset" }}
        >
          A single-page web application for Compound DeFi Protocol services,
          featuring ETH coins supply and DAI coins borrow. This app is
          interfacing with MetaMask wallets.
        </p>{" "}
      </Fade>
      {CompoundStackRow(props)}
      <div className="project-buttons" style={{ zIndex: 6 }}>
        <a
          style={{
            textAlign: "center",
            width: "100%",
            marginRight: "1%",
          }}
          href={"https://alonilk2.github.io/Compound-Protocol-Dapp/"}
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
          href={"https://github.com/alonilk2/Compound-Protocol-Dapp"}
        >
          {/* <button className="content-title-visit-git delay-1 col">
            <img src={Github} style={{ width: "40px" }}></img>Github Repository
          </button> */}
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

export default Compound;
