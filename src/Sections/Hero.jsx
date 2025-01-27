  import { PerspectiveCamera } from "@react-three/drei";
  import { Canvas } from "@react-three/fiber";
  import Model from "../components/Model";
  import { Suspense, useState, useRef } from "react";
  import CanvasLoader from "../components/CanvasLoader";
  import { Typewriter } from "react-simple-typewriter";
  import { useMediaQuery } from 
  "react-responsive";
  import Target from "../components/Target";
 

  const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [rotation, setRotation] = useState([0.12, 0.39, 0]); 
    const modelRef = useRef();

    const onPointerDown = (e) => {
      const initialRotation = rotation[1]; 
      const startX = e.clientX;

      const onPointerMove = (e) => {
        const deltaX = e.clientX - startX; 
        const newRotationY = initialRotation + deltaX * 0.01; 
        setRotation([rotation[0], newRotationY, rotation[2]]);
      };

      const onPointerUp = () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      };

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    };

    
    const onTouchStart = (e) => {
      if (isMobile) {
        const initialRotation = rotation[1];
        const startX = e.touches[0].clientX; 

        const onTouchMove = (e) => {
          const deltaX = e.touches[0].clientX - startX;
          const newRotationY = initialRotation + deltaX * 0.1; 
          setRotation([rotation[0], newRotationY, rotation[2]]);
        };

        const onTouchEnd = () => {
          window.removeEventListener("touchmove", onTouchMove);
          window.removeEventListener("touchend", onTouchEnd);
        };

        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("touchend", onTouchEnd);
      }
    };

    return (
      <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="text-white sm:text-[4rem] text-4xl font-medium text-center font-serif">
            Hi, I’m Arpit Kaul 
          </p>
          <p
            className={`text-blue-300 md:text-2xl font-medium font-serif text-2xl ${
              isMobile ? "text-center mt-3" : "ml-[22rem] mt-2"
            }`}
          >
            <Typewriter
              words={[
                "A Frontend Developer",
                "A problem Solver",
                "A Creative Thinker",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
             
            />
           
          </p>
        </div>
        <div className="flex justify-center text-white mt-3">
          <button className="text-black  bg-yellow-500 w-28 rounded-2xl h-9">Resume</button>
          <button className="ml-7 text-white  bg-gray-700 w-28 rounded-2xl  h-9">Hire Me</button>
        </div>
        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full" shadows>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              
              <Model
                ref={modelRef}
                position={[isMobile ? 0 : -0.1, isMobile ? -0.5 : -1.1, 2.5]}
                rotation={rotation}
                scale={isMobile ? 1.1 : 2.1}
                onPointerDown={onPointerDown} 
                onTouchStart={onTouchStart} 
              />

              
              
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
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