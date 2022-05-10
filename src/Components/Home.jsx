import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import * as THREE from "three";
import useWindowSize from "../Hooks/useWindowSize";
import { desktopCanvas, mobileCanvas } from "./3DCanvas";

function Home(props) {
  const size = useWindowSize();
  const [showTitle, setShowTitle] = useState(false);
  const [showTitle1, setShowTitle1] = useState(false);
  const [showTitleGradient, setShowTitleGradient] = useState(false);
  const [RemoveCol, setRemoveCol] = useState(false);
  const initialRender = useRef(true);

  const triggerInitialAnimations = () => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1200);
    setTimeout(() => {
      setShowTitle(false);
    }, 3000);
    setTimeout(() => {
      setShowTitle1(true);
    }, 3500);
    setTimeout(() => {
      setShowTitleGradient(true);
    }, 5500);
    setTimeout(() => {
      setRemoveCol(true);
    }, 7000);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      triggerInitialAnimations();
    }
  });

  const titleMovingAnimation = (
    <h3
      className="content-title alon-title title1 custom-animation-gradient1"
      style={{ textAlign: "center", width: "100%" }}
    >
      <span className="fade-animate">I'm</span> Alon
    </h3>
  );

  const titleBeforeMovement = (
    <>
      <Fade opposite when={showTitle} duration={2000}>
        <h3
          className="content-title content-title-project title1 "
          style={{ textAlign: "center" }}
        >
          Hi
        </h3>
      </Fade>
      <Fade when={showTitle1} duration={2000}>
        <h3
          className="content-title content-title-project title1 "
          style={{ textAlign: "center" }}
        >
          I'm Alon
        </h3>
      </Fade>
    </>
  );

  const scrollSideLottie = (
    <Fade opposite left when={props.state} duration={2000} delay={1000}>
      <iframe
        style={{
          height: "60%",
          width: "20%",
          marginLeft: "-7%",
        }}
        src="https://embed.lottiefiles.com/animation/14325"
      ></iframe>
    </Fade>
  );

  return (
    <>
      <section
        className={props.className}
        style={{
          marginTop: 0,
          zIndex: props.state ? 4 : 0,
          position: "relative",
        }}
      >
        {size.width > 768 && props.state ? scrollSideLottie : null}

        {!RemoveCol && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {showTitleGradient ? titleMovingAnimation : titleBeforeMovement}
          </div>
        )}

        <Fade bottom delay={6000} duration={2000} cascade>
          <div className="col" style={{ marginTop: "8.5%" }}>
            <h1 className="content-title linear-wipe hover-animate">
              FULL-STACK ENGINEER
            </h1>
          </div>
        </Fade>
        {size.width > 768 ? desktopCanvas : mobileCanvas}
        <div className="col">
          <a href="#" class="arrow-container">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
          </a>
          <h5 className="title-scroll">Scroll Down</h5>
        </div>
      </section>
    </>
  );
}

export default Home;
