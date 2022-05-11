import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import BlackHole from "./BlackHole";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export const desktopCanvas = (
  <Canvas
    camera={{ position: [0, 1, 8] }}
    style={{
      zIndex: 0,
      position: "absolute",
      width: "100%",
    }}
  >
    <OrbitControls />
    <Suspense fallback={<Loading />}>
      <BlackHole />
    </Suspense>
    <EffectComposer>
      <Bloom luminanceThreshold={0.1} intensity={3} height={400} />
    </EffectComposer>
  </Canvas>
);

export const mobileCanvas = (
  <Canvas
    camera={{ position: [0, 2, 11] }}
    style={{
      zIndex: 0,
      width: "100%",
      position: "absolute",
      bottom: "15%",
      height: "600px",
    }}
  >
        <OrbitControls />

    <Suspense fallback={<Loading />}>
      <BlackHole />
    </Suspense>
  </Canvas>
);
