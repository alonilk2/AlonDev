import React, {Suspense,useLayoutEffect,useEffect} from 'react';
import { Canvas,useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, ScrollControls, useScroll,useAnimations } from '@react-three/drei'

import * as THREE from 'three'
function Globe({...props}) {
 // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()

  const { scene, nodes, materials, animations } = useGLTF('scene.gltf')
  // const { actions } = useAnimations(animations, scene)
  // console.log(scroll)
  // useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  // useEffect(() => void (actions['animation_0'].play().paused = false), [actions])
  // useFrame((state, delta) => {
  //   const action = actions['animation_0']
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1- scroll.offset
  //   action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  // })
  return <primitive object={scene} scale={3} {...props} />
}

function Home(props){

    return (
        <>
          <section className={props.className}>
            <div className='content-body'>
              <h1 className='content-title delay-1'>Software Engineer &</h1>

              <h1 className='content-title-2 full-stack infinite delay-2'>
                Full-Stack
              </h1>
              <h1 className='content-title-2 developer custom-animation-white'>
                {' '}
                Developer
              </h1>
                    <Canvas camera={{ position: [0,3, 5] }} style={{zIndex: 0, position: 'absolute', width:'100%', right: -700}}>


        <OrbitControls />
        
        <Suspense fallback={null}>
                <ScrollControls pages={3}>

        
          <Globe />
                  </ScrollControls>

        </Suspense>
        
      </Canvas>
            </div>


          </section>
        </>    
        
    )
}

export default Home;