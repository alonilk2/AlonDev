import React from "react";
import ReactIcon from "../Images/React-icon.png";
import metamask from "../Images/metamask.png";
import Hardhat from "../Images/hardhat.png";
import Ethers from "../Images/ethers.png";
import Alchemy from "../Images/alchemy.png";
import "../App.css";
import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

function Compound(props) {
  return (
    <>
      <section className={props.className} style={{ marginTop: 0, zIndex: props.state ? 4 : 0 }}>
        <div className="content-body-project">
          <div
            className="col-4"
            style={{
              margin: "5% 0",
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
                Compound DApp
              </h1>{" "}
            </Flip>
            <Flip top when={props.state} delay={500}>
              <p
                className="description"
                style={{ position: "unset", height: "unset" }}
              >
                A single-page web application for Compound DeFi Protocol
                services, featuring ETH coins supply and DAI coins borrow. The
                app is interfacing with MetaMask wallets.
              </p>{" "}
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
                <Fade left when={props.state} delay={1200}>
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
                <Fade left when={props.state} delay={1400}>
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
                <Fade left when={props.state} delay={1600}>
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
                <Fade left when={props.state} delay={1800}>
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

            <a
              className="content-title-visit delay-1 "
              style={{ textAlign: "center", textDecoration: 'unset', zIndex: 3}}
              href={'https://alonilk2.github.io/compound-dapp/'}
            >
              Enter App
            </a>
          </div>

          <div class="image-cropper cf4a">
            <CrossfadeCarousel
              interval={3000}
              transition={2000}
              images={["https://alonilk2.github.io/map1/compound.jpg"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Compound;
