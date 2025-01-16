
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

  const Model = (props) => {
  const { nodes, materials } = useGLTF('/computer.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Monitor_01_A}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Monitor_01_B}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/computer.glb')
export default Model
