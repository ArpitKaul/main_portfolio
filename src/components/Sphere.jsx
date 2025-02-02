import React from 'react';
import { useGLTF, Float } from '@react-three/drei';

const Sphere = (props) => {
  const { nodes, materials } = useGLTF('/sphere.glb');

  return (
    <Float floatIntensity={1} speed={2} rotationIntensity={0.5} >
      <group {...props} dispose={null}>
        <group position={[1.32, 98.592, 23.61]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['1'].geometry}
            material={materials.Sphere_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['0'].geometry}
            material={materials.Sphere_2}
            position={[-0.003, 0.021, -0.004]}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload('/sphere.glb');
export default Sphere;
