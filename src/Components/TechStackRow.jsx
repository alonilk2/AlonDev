import ReactIcon from "../Images/React-icon.png";
import NodeIcon from "../Images/nodejs.svg";
import JavaIcon from "../Images/java.png";
import Fade from "react-reveal/Fade";
import MapsIcon from "../Images/maps.png";
import MetamaskIcon from "../Images/metamask.png";
import HardhatIcon from "../Images/hardhat.png";
import EthersIcon from "../Images/ethers.png";
import AlchemyIcon from "../Images/alchemy.png";
import SequelizeIcon from "../Images/sequelize.svg";
import PostgreIcon from "../Images/psql.png";
import ExpressIcon from "../Images/Expressjs.png";
function Hardhat(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="tech-logo"
          src={HardhatIcon}
          alt="HardhatSQL"
        />
        <p className="stack-title">Hardhat</p>
      </div>{" "}
    </Fade>
  );
}
function Alchemy(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="tech-logo"
          src={AlchemyIcon}
          alt="Alchemy"
        />
        <p className="stack-title">Alchemy</p>
      </div>{" "}
    </Fade>
  );
}
function MetaMask(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="tech-logo"
          src={MetamaskIcon}
          alt="metamask"
        />
        <p className="stack-title">MetaMask</p>
      </div>{" "}
    </Fade>
  );
}
function Ethers(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="tech-logo"
          src={EthersIcon}
          alt="Ethers.js"

        />
        <p className="stack-title">Ethers.js</p>
      </div>{" "}
    </Fade>
  );
}
function Java(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="tech-logo"
          src={JavaIcon}
          alt="Java"
        />
        <p className="stack-title">Java</p>
      </div>{" "}
    </Fade>
  );
}
function Maps(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="tech-logo"
          src={MapsIcon}
          alt="Google Maps API"
        />
        <p className="stack-title">Google Maps API</p>
      </div>{" "}
    </Fade>
  );
}
function Node(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="tech-logo"
          src={NodeIcon}
          alt="node.js"
        />
        <p className="stack-title">Node.js</p>
      </div>{" "}
    </Fade>
  );
}
function React(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img
          className="row tech-logo"
          src={ReactIcon}
          alt="react"
        />
        <p className="row stack-title">React Native</p>
      </div>{" "}
    </Fade>
  );
}
function Sequelize(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        {" "}
        <img className="tech-logo" src={SequelizeIcon} alt="Sequelize" />{" "}
        <p className="stack-title">Sequelize</p>
      </div>{" "}
    </Fade>
  );
}
function PostgreSQL(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        {" "}
        <img className="tech-logo" src={PostgreIcon} alt="PostgreSQL" />{" "}
        <p className="stack-title">PostgreSQL</p>
      </div>{" "}
    </Fade>
  );
}
function Express(state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        {" "}
        <img className="tech-logo" src={ExpressIcon} alt="Express.js" />{" "}
        <p className="stack-title">Express.js</p>
      </div>{" "}
    </Fade>
  );
}
export function CelluStackRow(props) {
  return (
    <Fade left when={props?.state} delay={800}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {React(props?.state, 900)}
        {Node(props?.state, 1000)}
        {Maps(props?.state, 1100)}
        {Java(props?.state, 1200)}
      </div>
    </Fade>
  );
}
export function CompoundStackRow(props) {
  return (
    <Fade left when={props?.state} delay={800}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {React(props?.state, 900)}
        {Ethers(props?.state, 1000)}
        {MetaMask(props?.state, 1100)}
        {Hardhat(props?.state, 1200)}
        {Alchemy(props?.state, 1300)}
      </div>
    </Fade>
  );
}
export function IMBarberStackRow(props) {
  return (
    <Fade left when={props?.state} delay={800}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {React(props?.state, 900)}
        {Node(props?.state, 1000)}
        {Sequelize(props?.state, 1100)}
        {PostgreSQL(props?.state, 1200)}
        {Express(props?.state, 1300)}
      </div>
    </Fade>
  );
}
