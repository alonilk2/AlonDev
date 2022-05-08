import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import BlackHole from "./BlackHole";

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
        metalness={0} />
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
    <ambientLight intensity={1} />
    <Suspense fallback={<Loading />}>
      <BlackHole />
    </Suspense>
  </Canvas>
);

export const mobileCanvas = (
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
    <ambientLight intensity={1} />
    <Suspense fallback={<Loading />}>
      <BlackHole />
    </Suspense>
  </Canvas>
);
