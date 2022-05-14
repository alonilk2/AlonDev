import "../App.css";
import ReactIcon from "../Images/React-icon.png";
import metamask from "../Images/metamask.png";
import Hardhat from "../Images/hardhat.png";
import Ethers from "../Images/ethers.png";
import Alchemy from "../Images/alchemy.png";
import Github from '../Images/github.png';

import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";

function Compound(props) {
  const size = useWindowSize()
  const techStackRow = (
    <Fade left when={props.state} delay={800}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        <Fade left when={props.state} delay={900}>
          <div className="col tech-col">
            <img
              className="row tech-logo"
              src={ReactIcon}
              style={{
                width: "90%",
                position: "unset",
                height: "unset",
              }}
              alt="react"
            />
            <p className="row stack-title">React.js</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1000}>
          <div className="col tech-col">
            <img
              className="tech-logo"
              src={Ethers}
              alt="Ethers.js"
              style={{
                transform: "scale(1.5)",
                marginBottom: "20px",
                position: "unset",
                height: "unset",
              }}
            />
            <p className="stack-title">Ethers.js</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1100}>
          <div className="col tech-col">
            <img
              className="tech-logo"
              src={metamask}
              alt="metamask"
              style={{ position: "unset", height: "unset" }}
            />
            <p className="stack-title">MetaMask</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1200}>
          <div className="col tech-col">
            <img
              className="tech-logo"
              src={Hardhat}
              alt="HardhatSQL"
              style={{ position: "unset", height: "unset" }}
            />
            <p className="stack-title">Hardhat</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1300}>
          <div className="col tech-col">
            <img
              className="tech-logo"
              src={Alchemy}
              alt="Alchemy"
              style={{ position: "unset", height: "unset" }}
            />
            <p className="stack-title">Alchemy</p>
          </div>{" "}
        </Fade>
      </div>
    </Fade>
  );
  const imageCropperMobile = (
    <div class="image-cropper cf4a">
      <img src={"https://alonilk2.github.io/map1/abdev/compound.png"} alt=""></img>
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
        style={{objectFit: 'cover'}}
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
      </h1>
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
      {techStackRow}
      <div className="project-buttons" style={{zIndex: 6}}>
        <a
          style={{
            textAlign: "center",
            width: "100%", marginRight: '1%'
          }}
          href={"https://alonilk2.github.io/Compound-Protocol-Dapp/"}
        >
          <button className="content-title-visit delay-1 col ">
            Enter App
          </button>
        </a>{" "}
        <a
          style={{
            textAlign: "center",
            width: "100%", marginLeft: '1%',    color: 'transparent'
          }}
          href={"https://github.com/alonilk2/Compound-Protocol-Dapp"}
        >
          <button className="content-title-visit-git delay-1 col">
          <img src={Github} style={{width:'40px'}}></img>Github Repository 
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

          {size.width>768 ? imageCropper : imageCropperMobile}
                  </div>
      </section>
    </>
  );
}

export default Compound;
