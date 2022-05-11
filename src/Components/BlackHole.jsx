import React, { useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function BlackHole({ ...props }) {
  const boxRef = useRef();
  const scaleFlag = useRef(false);
  const { viewport } = useThree();
  const { scene, nodes } = useGLTF("https://www.alondev.com/scene.gltf");
  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useFrame((mouse) => {
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
