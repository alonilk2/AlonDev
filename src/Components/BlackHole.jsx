import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function BlackHole({ ...props }) {
  const boxRef = useRef();
  const scaleFlag = useRef(false);
  const { scene } = useGLTF("https://www.alondev.com/scene.gltf");

  useFrame(() => {
    boxRef.current.rotation.y += 0.001;

    if (
      (boxRef.current.scale.x < 3 && !scaleFlag.current) ||
      boxRef.current.scale.x < 2
    ) {
      scaleFlag.current = false;
      boxRef.current.scale.z += 0.001;
      boxRef.current.scale.x += 0.001;
      boxRef.current.scale.y += 0.001;
    } else {
      scaleFlag.current = true;
      boxRef.current.scale.z -= 0.001;
      boxRef.current.scale.x -= 0.001;
      boxRef.current.scale.y -= 0.001;
    }
  });

  return <primitive object={scene} ref={boxRef} scale={3} {...props} />;
}
