import { useGLTF, Float } from '@react-three/drei';
import React, { useRef } from 'react';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 11, 0]}>
      {/* Using the Float component for smooth up/down animation */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <primitive object={scene} scale={0.4} />
      </Float>
    </mesh>
  );
};

export default Target;
