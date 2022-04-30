// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Suspense} from 'react'
// import * as THREE from 'three'

//   const group = useRef()
//   const { nodes, materials } = useGLTF('./scene.gltf')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group position={[1315.41, -16.16, 1795.43]} rotation={[Math.PI, 1.05, -3.13]} />
//           <group rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
//             <group position={[0, 0, 500]}>
//               <mesh
//                 geometry={nodes.Surface_Paint_Metallic_Orange_peel_Slate_Grey_0.geometry}
//                 material={materials.Paint_Metallic_Orange_peel_Slate_Grey}
//               />
//             </group>
//             <group position={[0, 0, 500]}>
//               <mesh
//                 geometry={nodes['Dual_Graph-Type-1_Anodized_Titanium_Rough_Blue_0'].geometry}
//                 material={nodes['Dual_Graph-Type-1_Anodized_Titanium_Rough_Blue_0'].material}
//               />
//               <mesh
//                 geometry={nodes['Dual_Graph-Type-1_Anodized_Titanium_Rough_Blue_0_1'].geometry}
//                 material={nodes['Dual_Graph-Type-1_Anodized_Titanium_Rough_Blue_0_1'].material}
//               />
//             </group>
//             <group position={[0, 0, 500]}>
//               <mesh
//                 geometry={nodes['Dual_Graph3_Paint_Metallic_Cool_Grey_#1_0'].geometry}
//                 material={nodes['Dual_Graph3_Paint_Metallic_Cool_Grey_#1_0'].material}
//               />
//               <mesh
//                 geometry={nodes['Dual_Graph3_Paint_Metallic_Cool_Grey_#1_0_1'].geometry}
//                 material={nodes['Dual_Graph3_Paint_Metallic_Cool_Grey_#1_0_1'].material}
//               />
//             </group>
//             <group position={[0, 0, 500]} scale={0.99}>
//               <mesh
//                 geometry={nodes['Continents_Mesh-1_Paint_Metallic_Orange_peel_Slate_Grey_0'].geometry}
//                 material={materials.Paint_Metallic_Orange_peel_Slate_Grey_0}
//               />
//             </group>
//             <group position={[0, 0, 500]}>
//               <mesh
//                 geometry={nodes['Continents_Paint_Metallic_Cool_Grey_#1_0'].geometry}
//                 material={materials.Paint_Metallic_Cool_Grey_1_0}
//               />
//             </group>
//             <group position={[0, 0, 500]}>
//               <mesh
//                 geometry={nodes.Frame_Paint_Metallic_Orange_peel_Cool_Grey_0.geometry}
//                 material={materials.Paint_Metallic_Orange_peel_Cool_Grey}
//               />
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('./scene.gltf')
// export default function Scene() {
//   const { gltf } = useLoader(GLTFLoader, './scene.gltf')
//   gltf.add(new THREE.AmbientLight(0x404040, 100))
//   return (
//       <primitive object={gltf.scene} />
//   )
// }

