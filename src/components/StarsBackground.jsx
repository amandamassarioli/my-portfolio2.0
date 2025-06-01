// src/components/StarsBackground.jsx
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarsBackground = () => {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-full -z-10">
      <Stars
        radius={100} 
        depth={50} 
        count={10000}
        factor={4}
        fade
        speed={1}
      />
    </Canvas>
  );
};

export default StarsBackground;
