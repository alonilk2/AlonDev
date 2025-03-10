import ReactIcon from "../../Images/React-icon.png";
import NodeIcon from "../../Images/nodejs.svg";
import JavaIcon from "../../Images/java.png";
import Fade from "react-reveal/Fade";
import MapsIcon from "../../Images/maps.png";
import MetamaskIcon from "../../Images/metamask.png";
import HardhatIcon from "../../Images/hardhat.png";
import EthersIcon from "../../Images/ethers.png";
import AlchemyIcon from "../../Images/alchemy.png";
import SequelizeIcon from "../../Images/sequelize.svg";
import PostgreIcon from "../../Images/psql.png";
import ExpressIcon from "../../Images/Expressjs.png";
import RestIcon from "../../Images/rest.png";
import TsIcon from "../../Images/ts-logo-128.png";
import SpringIcon from "../../Images/spring.svg";
import HibernateIcon from "../../Images/hibernate.svg";
import MysqlIcon from "../../Images/mysql.png";
import MUIIcon from "../../Images/mui.svg";

function Icon(icon, name, state, delay) {
  return (
    <Fade left when={state} delay={delay}>
      <div className="col tech-col">
        <img className="row tech-logo" src={icon} alt={name} />
        <p className="row stack-title">{name}</p>
      </div>
    </Fade>
  );
}
export function CelluStackRow(props) {
  return (
    <Fade left when={props?.state} delay={350}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React Native", props?.state, 400)}
        {Icon(NodeIcon, "Node.js", props?.state, 450)}
        {Icon(MapsIcon, "Google Maps API", props?.state, 500)}
        {Icon(JavaIcon, "Java", props?.state, 550)}
      </div>
    </Fade>
  );
}
export function CompoundStackRow(props) {
  return (
    <Fade left when={props?.state} delay={350}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "80px" }}
      >
        {Icon(ReactIcon, "React.js", props?.state, 400)}
        {Icon(EthersIcon, "Ethers.js", props?.state, 450)}
        {Icon(MetamaskIcon, "MetaMask", props?.state, 500)}
        {Icon(HardhatIcon, "Hardhat", props?.state, 550)}
        {Icon(AlchemyIcon, "Alchemy", props?.state, 600)}
      </div>
    </Fade>
  );
}
export function IMBarberStackRow(props) {
  return (
    <Fade right when={props?.state} delay={350}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React.js", props?.state, 400)}
        {Icon(NodeIcon, "Node.js", props?.state, 450)}
        {Icon(SequelizeIcon, "Sequelize", props?.state, 500)}
        {Icon(PostgreIcon, "PostgreSQL", props?.state, 550)}
        {Icon(ExpressIcon, "Express", props?.state, 600)}
      </div>
    </Fade>
  );
}
export function TorgateStackRow(props) {
  return (
    <Fade right when={props?.state} delay={350}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React.js", props?.state, 400)}
        {Icon(SpringIcon, "Spring Boot", props?.state, 450)}
        {Icon(HibernateIcon, "Hibernate", props?.state, 500)}
        {Icon(MysqlIcon, "MySQL", props?.state, 550)}
        {Icon(MUIIcon, "Material UI", props?.state, 600)}
      </div>
    </Fade>
  );
}
export function SimonSaysStackRow(props) {
  return (
    <Fade right when={props?.state} delay={350}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React Native", props?.state, 400)}
        {Icon(TsIcon, "TypeScript", props?.state, 500)}
      </div>
    </Fade>
  );
}
export function FiberLocatorStackRow(props) {
  return (
    <Fade right when={props?.state} delay={350}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        {Icon(ReactIcon, "React.js", props?.state, 400)}
        {Icon(NodeIcon, "Node.js", props?.state, 450)}
        {Icon(RestIcon, "Rest", props?.state, 500)}
      </div>
    </Fade>
  );
}
