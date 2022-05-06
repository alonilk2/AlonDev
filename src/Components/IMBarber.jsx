import React from "react";
import ReactIcon from "../Images/React-icon.png";
import Sequelize from "../Images/sequelize.svg";
import Postgre from "../Images/psql.png";
import Node from "../Images/nodejs.svg";
import Express from "../Images/Expressjs.png";
import "../App.css";
import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";

function IMBarber(props) {
  const size = useWindowSize();
  if (size.width < 768) {
    return ( 
    <>
      <section className={props.className} style={{ margin: "0 2%" }}>
        <div className="content-body-project">
          <div
            className="col-4"
            style={{
              margin: "5% 2%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Flip top when={props.state}>
              <h1
                className="content-title-project delay-1"
                style={{ position: "unset", height: "unset" }}
              >
                IM.Barber
              </h1>
            </Flip>
            <Flip top when={props.state} delay={500}>
              <p
                className="description"
                style={{ position: "unset", height: "unset" }}
              >
                IM.Barber is an online store and corporate website for
                IM.Barber-Academy & Barbershop. This project includes online
                store management, users and orders management, all made
                originally according to customer's demands.
              </p>
            </Flip>
            <Fade left when={props.state} delay={800}>

            <div
              className="row project-info"
              style={{ position: "unset", height: "unset" }}
            >
              <Fade left when={props.state} delay={1000}>
                <div className="col tech-col">
                  <img
                    className="row tech-logo"
                    src={ReactIcon}
                    style={{ position: "unset", height: "unset" }}
                    alt="react"
                  />{" "}
                  <p className="row stack-title">React.js</p>
                </div>{" "}
              </Fade>
              <Fade left when={props.state} delay={1200}>
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
              <Fade left when={props.state} delay={1400}>
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
              <Fade left when={props.state} delay={1600}>
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
              <Fade left when={props.state} delay={1800}>
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

            <a
              className="content-title-visit delay-1 "
              style={{
                textAlign: "center",
                position: "unset",
                height: "unset",
                textDecoration: 'unset'
              }}
              href={'https://imbarber.com'}
            >
              Visit IM.Barber
            </a>
          </div>
          <div class="image-cropper cf4a">
            <CrossfadeCarousel
              interval={3000}
              transition={2000}
              images={[
                "https://alonilk2.github.io/map1/barber2.png",
                "https://alonilk2.github.io/map1/barber1.png",
                "https://alonilk2.github.io/map1/barber3.png",
              ]}
            />
          </div>
        </div>
      </section>
    </>
    )
  }
  return (
    <>
      <section className={props.className} style={{ margin: "0 2%" }}>
        <div className="content-body-project">
          <div
            className="col-4"
            style={{
              margin: "5% 2%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Flip top when={props.state}>
              <h1
                className="content-title-project delay-1"
                style={{ position: "unset", height: "unset" }}
              >
                IM.Barber
              </h1>
            </Flip>
            <Flip top when={props.state} delay={500}>
              <p
                className="description"
                style={{ position: "unset", height: "unset" }}
              >
                IM.Barber is an online store and corporate website for
                IM.Barber-Academy & Barbershop. This project includes online
                store management, users and orders management, all made
                originally according to customer's demands.
              </p>
            </Flip>
            <Fade left when={props.state} delay={800}>

            <div
              className="row project-info"
              style={{ position: "unset", height: "unset" }}
            >
              <Fade left when={props.state} delay={1000}>
                <div className="col tech-col">
                  <img
                    className="row tech-logo"
                    src={ReactIcon}
                    style={{ width: "90%", position: "unset", height: "unset" }}
                    alt="react"
                  />{" "}
                  <p className="row stack-title">React.js</p>
                </div>{" "}
              </Fade>
              <Fade left when={props.state} delay={1200}>
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
              <Fade left when={props.state} delay={1400}>
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
              <Fade left when={props.state} delay={1600}>
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
              <Fade left when={props.state} delay={1800}>
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

            <a
              className="content-title-visit delay-1 "
              style={{
                textAlign: "center",
                position: "unset",
                height: "unset",
                textDecoration: 'unset'
              }}
              href={'https://imbarber.com'}
            >
              Visit IM.Barber
            </a>
          </div>
          <div class="image-cropper cf4a">
            <CrossfadeCarousel
              interval={3000}
              transition={2000}
              images={[
                "https://alonilk2.github.io/map1/barber2.png",
                "https://alonilk2.github.io/map1/barber1.png",
                "https://alonilk2.github.io/map1/barber3.png",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default IMBarber;
