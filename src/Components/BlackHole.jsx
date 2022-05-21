import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import useScrollState from "../Hooks/useScrollState";

export default function BlackHole({ ...props }) {
  const boxRef = useRef();
  const scaleFlag = useRef(false);
  const { scene } = useGLTF("https://www.alondev.com/scene.gltf");
  const [scrollState, setPageScrollState, scrollStateMobile] = useScrollState();
  useEffect(()=>{
    console.log(scrollStateMobile)
  },[scrollStateMobile])
  useFrame(() => {
    if(scrollStateMobile < 400){
      boxRef.current.rotation.y += 0.001;

      if (
        (boxRef.current.scale.x < 3 && !scaleFlag.current) ||
        boxRef.current.scale.x < 2
      ) {
        scaleFlag.current = false;
        boxRef.current.scale.z += 0.0015;
        boxRef.current.scale.x += 0.0015;
        boxRef.current.scale.y += 0.0015;
      } else {
        scaleFlag.current = true;
        boxRef.current.scale.z -= 0.0015;
        boxRef.current.scale.x -= 0.0015;
        boxRef.current.scale.y -= 0.0015;
      }
    }

  });

  return <primitive object={scene} ref={boxRef} scale={1} {...props} />;
}
