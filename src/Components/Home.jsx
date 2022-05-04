import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import Fade from "react-reveal/Fade";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";
import BlackHole from "./BlackHole";

function Home(props) {
  const [showTitle, setShowTitle] = useState(false);
  const [showTitle1, setShowTitle1] = useState(false);
  const [showTitleGradient, setShowTitleGradient] = useState(false);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current === true) {
      initialRender.current = false;

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

    }
  });

  return (
    <>
      <section className={props.className} style={{ flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            height: "90px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {showTitleGradient ? (
            <h3
              className="content-title alon-title title custom-animation-gradient1"
              style={{ textAlign: "center" }}
            >
              <span className="fade-animate">I'm</span> Alon
            </h3>
          ) : (
            <>
              <Fade opposite when={showTitle} duration={2000}>
                <h3
                  className="content-title content-title-project title1"
                  style={{ textAlign: "center", margin: "0% 5%" }}
                >
                  Hi
                </h3>
              </Fade>
              <Fade when={showTitle1} duration={2000}>
                <h3
                  className="content-title content-title-project title1"
                  style={{ textAlign: "center", margin: "0% 5%" }}
                >
                  I'm Alon
                </h3>
              </Fade>
            </>
          )}
        </div>
        <Fade bottom delay={6000} duration={2000}>
          <div className="col" style={{ marginTop: "8.5%" }}>
            <h1 className="content-title linear-wipe">FULL-STACK ENGINEER</h1>
          </div>
        </Fade>
        <Canvas
          camera={{ position: [0, 2, 7] }}
          style={{
            zIndex: 0,
            position: "absolute",
            width: "100%",
          }}
        >
          <ambientLight intensity={1} />

          <Suspense fallback={null}>
            <BlackHole />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
}

export default Home;
