import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";

const Hero = () => {
  // const isMobile = useMediaQuery(settings:{maxWidth:})

  return (
    <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-white sm:text-[4rem] text-3xl font-medium text-center font-generalsans">
          Hi, I’m Arpit Kaul <span className="waving-hand">👋</span>
        </p>
        <p className="text-blue-300 sm:text-xl font-medium font-serif text-4xl text-center">
          A Frontend Developer
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full" shadows>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls />
            <Model
              position={[0.4, -1.5, 2]}
              rotation={[0.0, 0.6,0.0]}
              scale={[1.1, 1.1, 1.1]} 
            />
            {/* Enhanced Lighting */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <directionalLight
              position={[-5, -5, -5]}
              intensity={0.5}
              color="#ffccaa"
            />
            <pointLight position={[10, 10, 10]} intensity={0.6} color="#ffffff" />
            <spotLight
              position={[15, 20, 10]}
              angle={0.3}
              penumbra={1}
              intensity={1}
              castShadow
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
