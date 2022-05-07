import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import Fade from "react-reveal/Fade";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import BlackHole from "./BlackHole";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import * as THREE from "three";
import useWindowSize from "../Hooks/useWindowSize";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  );
  useEffect(
    () => void scene && composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => scene && composer.current.render(), 1);
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[aspect, 3, 0.8, 0]} />
      </effectComposer>
    </>
  );
}
function Home(props) {
  const size = useWindowSize();
  const [showTitle, setShowTitle] = useState(false);
  const [showTitle1, setShowTitle1] = useState(false);
  const [showTitleGradient, setShowTitleGradient] = useState(false);
  const [RemoveCol, setRemoveCol] = useState(false);

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
      setTimeout(() => {
        setRemoveCol(true);
      }, 7000);
    }
  });

  return (
    <>
      <section className={props.className} style={{ marginTop: 0 }}>
        {size.width > 768 && (
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
        )}
        {!RemoveCol && (
          <div
            style={{
              width: "100%",
              // height: "90px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {showTitleGradient ? (
              <h3
                className="content-title alon-title title1 custom-animation-gradient1"
                style={{ textAlign: "center", width: "100%" }}
              >
                <span className="fade-animate">I'm</span> Alon
              </h3>
            ) : (
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
            )}
          </div>
        )}

        <Fade bottom delay={6000} duration={2000}>
          <div className="col" style={{ marginTop: "8.5%" }}>
            <h1 className="content-title linear-wipe">FULL-STACK ENGINEER</h1>
          </div>
        </Fade>
        {size.width > 768 ? (
          <Canvas
            camera={{ position: [0, 1, 8] }}
            style={{
              zIndex: 0,
              position: "absolute",
              width: "100%",
            }}
          >
            {/* <Bloom> */} <ambientLight intensity={1} />
            <Suspense fallback={null}>
              <BlackHole />
            </Suspense>
            {/* </Bloom> */}
          </Canvas>
        ) : (
          <Canvas
            camera={{ position: [0, 2, 11] }}
            style={{
              zIndex: 0,
              width: "100%",
              position: "absolute",
              top: "5%",
              minHeight: "500px",
            }}
          >
            {/* <Bloom> */} <ambientLight intensity={1} />
            <Suspense fallback={null}>
              <BlackHole />
            </Suspense>
            {/* </Bloom> */}
          </Canvas>
        )}
      </section>
    </>
  );
}

export default Home;
