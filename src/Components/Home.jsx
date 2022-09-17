import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import useWindowSize from "../Hooks/useWindowSize";
import homeVector from "../Images/home-vector.webp";

function Home(props) {
  const size = useWindowSize();
  const [showTitle, setShowTitle] = useState(false);
  const [showTitle1, setShowTitle1] = useState(false);
  const [showPreAnimation, setShowPreAnimation] = useState(false);
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
    }, 3800);
    setTimeout(() => {
      setShowTitle1(false);
    }, 5800);
    setTimeout(() => {
      setShowPreAnimation(true);
    }, 7000);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      triggerInitialAnimations();
    }
  });

  const titleBeforeMovement = (
    <>
      <Fade duration={1000} when={showTitle}>
        <h3
          className="content-title content-title-project title1 "
          style={{ textAlign: "center" }}
        >
          Hi
        </h3>
      </Fade>
      <Fade duration={1000} when={showTitle1}>
        <h3
          className="content-title content-title-project title1 "
          style={{ textAlign: "center" }}
        >
          I'm Alon
        </h3>
      </Fade>
    </>
  );

  const mainTitleMobile = (
    <Fade left delay={6000} duration={2000}>
      <div style={{ marginTop: "10%", zIndex: 20 }}>
        <h1 className="content-title linear-wipe hover-animate-static">
          FULL STACK ENGINEER
        </h1>
      </div>
    </Fade>
  );

  const mainTitle = (
    <Fade left delay={6000} duration={2000}>
      <div className="col" style={styles.mainTitle}>
        <h1 className="content-title hover-animate-main">
          <span>F</span>
          <span>U</span>
          <span>L</span>
          <span style={{ marginRight: "30px" }}>L</span>
        </h1>
        <h1 className="content-title hover-animate-main">
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span style={{ marginRight: "30px" }}>K</span>
        </h1>
        <h1 className="content-title hover-animate-main">
          <span>D</span>
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
        </h1>
      </div>
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
        {!showPreAnimation && (
          <div className="titleBeforeMovement">{titleBeforeMovement}</div>
        )}
        {size.width <= 980 && mainTitleMobile}
        <Fade right delay={6000} duration={2000}>
          <img className="home-vector" src={homeVector} alt="home" />
        </Fade>
        {size.width > 980 && mainTitle}
      </section>
    </>
  );
}
const styles = {
  mainTitle: {
    zIndex: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "3%",
  },
};
export default Home;
