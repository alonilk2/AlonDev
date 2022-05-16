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
import RestIcon from "../Images/rest.png";

function Icon(icon, name, state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img className="row tech-logo" src={icon} alt={name} />
        <p className="row stack-title">{name}</p>
      </div>{" "}
    </Fade>
  );
}
export function CelluStackRow(props) {
  return (
    <Fade left when={props?.state} delay={500}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React Native", props?.state, 600)}
        {Icon(NodeIcon, "Node.js", props?.state, 700)}
        {Icon(MapsIcon, "Google Maps API", props?.state, 800)}
        {Icon(JavaIcon, "Java", props?.state, 900)}
      </div>
    </Fade>
  );
}
export function CompoundStackRow(props) {
  return (
    <Fade left when={props?.state} delay={500}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React.js", props?.state, 600)}
        {Icon(EthersIcon, "Ethers.js", props?.state, 700)}
        {Icon(MetamaskIcon, "MetaMask", props?.state, 800)}
        {Icon(HardhatIcon, "Hardhat", props?.state, 900)}
        {Icon(AlchemyIcon, "Alchemy", props?.state, 1000)}
      </div>
    </Fade>
  );
}
export function IMBarberStackRow(props) {
  return (
    <Fade left when={props?.state} delay={500}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React.js", props?.state, 600)}
        {Icon(NodeIcon, "Node.js", props?.state, 700)}
        {Icon(SequelizeIcon, "Sequelize", props?.state, 800)}
        {Icon(PostgreIcon, "PostgreSQL", props?.state, 900)}
        {Icon(ExpressIcon, "Express", props?.state, 1000)}
      </div>
    </Fade>
  );
}
export function FiberLocatorStackRow(props) {
  return (
    <Fade left when={props?.state} delay={500}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React.js", props?.state, 600)}
        {Icon(NodeIcon, "Node.js", props?.state, 700)}
        {Icon(RestIcon, "Rest", props?.state, 800)}
      </div>
    </Fade>
  );
}
