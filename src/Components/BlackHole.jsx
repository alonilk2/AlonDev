import React, { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF, useScroll,
  useAnimations
} from "@react-three/drei";

export default function BlackHole({ ...props }) {
  const scroll = useScroll();
  const boxRef = useRef();
  const scaleFlag = useRef(false);
  const { scene, nodes, materials, animations } = useGLTF("https://alonilk2.github.io/abdev/scene.gltf");
  const { ref, names, actions, clips } = useAnimations(animations, scene);
  useLayoutEffect(() => Object.values(nodes).forEach(
    (node) => (node.receiveShadow = node.castShadow = true)
  )
  );
  //   useEffect(() => void (actions[0].play().paused = false), [actions])
  // useFrame((state, delta) => {
  //   const action = actions[0]
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1- scroll.offset
  //   action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  // })
  useFrame(() => {
    boxRef.current.rotation.y += 0.001;
    if ((boxRef.current.scale.x < 3 && !scaleFlag.current) ||
      boxRef.current.scale.x < 2) {
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
