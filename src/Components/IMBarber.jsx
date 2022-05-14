import ReactIcon from "../Images/React-icon.png";
import Sequelize from "../Images/sequelize.svg";
import Postgre from "../Images/psql.png";
import Node from "../Images/nodejs.svg";
import Express from "../Images/Expressjs.png";
import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import Fade from "react-reveal/Fade";
import "../App.css";
import useWindowSize from "../Hooks/useWindowSize";
import Github from "../Images/github.png";
function IMBarber(props) {
  const size = useWindowSize();
  const techStackRow = (
    <Fade left when={props.state} delay={800}>
      <div
        className="row project-info"
        style={{ position: "unset", height: "unset" }}
      >
        <Fade left when={props.state} delay={900}>
          <div className="col tech-col">
            <img
              className="tech-logo"
              src={ReactIcon}
              style={{
                transform: "scale(1.1)",
                position: "unset",
                height: "unset",
              }}
              alt="react"
            />{" "}
            <p className="stack-title">React.js</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1000}>
          <div className="col tech-col">
            <img
              className="tech-logo"
              src={Node}
              alt="node.js"
              style={{ position: "unset", height: "unset" }}
            />{" "}
            <p className="stack-title">Node.js</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1100}>
          <div className="col tech-col">
            {" "}
            <img
              className="tech-logo"
              src={Sequelize}
              alt="Sequelize"
              style={{ position: "unset", height: "unset" }}
            />{" "}
            <p className="stack-title">Sequelize</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1200}>
          <div className="col tech-col">
            {" "}
            <img
              className="tech-logo"
              src={Postgre}
              alt="PostgreSQL"
              style={{ position: "unset", height: "unset" }}
            />{" "}
            <p className="stack-title">PostgreSQL</p>
          </div>{" "}
        </Fade>
        <Fade left when={props.state} delay={1300}>
          <div className="col tech-col">
            {" "}
            <img
              className="tech-logo"
              src={Express}
              alt="Express.js"
              style={{ position: "unset", height: "unset" }}
            />{" "}
            <p className="stack-title">Express.js</p>
          </div>{" "}
        </Fade>
      </div>
    </Fade>
  );

  const sideColumn = (
    <div
      className="col-4"
      style={{
        margin: size.width > 768 ? "2% 4%" : "5% 0",
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
        <span>I'</span>
        <span>M</span> <span>B</span>
        <span>a</span>
        <span>r</span>
        <span>b</span>
        <span>e</span>
        <span>r</span>
      </h1>
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
      {techStackRow}
        <div className="project-buttons">
          <a
            style={{
              textAlign: "center",
              width: "100%",
              marginRight: "1%",
            }}
            href={"https://imbarber.com"}
          >
            <button className="content-title-visit delay-1 col ">
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
            <button className="content-title-visit-git delay-1 col">
              <img src={Github} style={{ width: "40px" }}></img>Github
              Repository
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

export default IMBarber;
