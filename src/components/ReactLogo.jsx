import React, { useRef } from 'react';
import { useGLTF, Float } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/react_logo.glb');

  return (
    <Float floatIntensity={1} speed={2} rotationIntensity={0.5} >
      <group position={[-8, -8, 0]} scale={0.2} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.39]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/react_logo.glb');
export default ReactLogo;
