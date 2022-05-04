import React, { Suspense, useLayoutEffect, useEffect, useRef, useState } from 'react'
import Fade from 'react-reveal/Fade'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  OrbitControls,
  ScrollControls,
  useScroll,
  useAnimations
} from '@react-three/drei'

function Globe({ ...props }) {
  const scroll = useScroll()
  const boxRef = useRef()
  const scaleFlag = useRef(false)
  const { scene, nodes, materials, animations } = useGLTF('scene.gltf')
  const { ref, names, actions, clips } = useAnimations(animations, scene)
  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      node => (node.receiveShadow = node.castShadow = true)
    )
  )
  //   useEffect(() => void (actions[0].play().paused = false), [actions])
  // useFrame((state, delta) => {
  //   const action = actions[0]
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1- scroll.offset
  //   action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  // })
  useFrame(() => {
    boxRef.current.rotation.y += 0.001
    if (
      (boxRef.current.scale.x < 3 && !scaleFlag.current) ||
      boxRef.current.scale.x < 2
    ) {
      scaleFlag.current = false
      boxRef.current.scale.z += 0.001
      boxRef.current.scale.x += 0.001
      boxRef.current.scale.y += 0.001
    } else {
      scaleFlag.current = true
      boxRef.current.scale.z -= 0.001
      boxRef.current.scale.x -= 0.001
      boxRef.current.scale.y -= 0.001
    }
  })

  return <primitive object={scene} ref={boxRef} scale={2} {...props} />
}

function Home(props) {
  const [showTitle, setShowTitle] = useState(false)
  const [showTitle1, setShowTitle1] = useState(false)
  const [showTitleGradient, setShowTitleGradient] = useState(false)

  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current === true) {
      initialRender.current = false

      setTimeout(() => {
        setShowTitle(true)
      }, 1200)
      setTimeout(() => {
        setShowTitle(false)
      }, 3000)
      setTimeout(() => {
        setShowTitle1(true)
      }, 4000)
      setTimeout(() => {
        setShowTitleGradient(true)
      }, 5000)
      setTimeout(() => {
        setShowTitleGradient(true)
      }, 5000)
    }

  })
  return (
    <>
      <section className={props.className} style={{ flexDirection: 'column' }}>
        <div style={{
          width: '100%',
          height: '90px',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}>

          {showTitleGradient ? (
            <h3
              className='content-title alon-title title custom-animation-gradient1'
              style={{ textAlign: 'center' }}
            >
              <span className='fade-animate'>I'm</span> Alon
            </h3>
          ) : (
            <>
              <Fade opposite when={showTitle} duration={2000}>
                <h3
                  className='content-title content-title-project title1'
                  style={{ textAlign: 'center', margin: '0% 5%' }}
                >
                  Hi
                </h3>
              </Fade>
              <Fade when={showTitle1} duration={2000}>
                <h3
                  className='content-title content-title-project title1'
                  style={{ textAlign: 'center', margin: '0% 5%' }}
                >
                  I'm Alon
                </h3>
              </Fade></>
          )}

        </div>
        <Fade bottom delay={6000}>

        <div className='col' style={{marginTop: '8.5%'}}>
          <h1 className='content-title linear-wipe'>FULL-STACK ENGINEER</h1>
        </div>
        </Fade>
        <Canvas
          camera={{ position: [0, 2, 7] }}
          style={{
            zIndex: 0,
            position: 'absolute',
            width: '100%'
          }}
        >
          <ambientLight intensity={1} />

          <Suspense fallback={null}>
            <Globe />
          </Suspense>
        </Canvas>
      </section>
    </>
  )
}

export default Home
