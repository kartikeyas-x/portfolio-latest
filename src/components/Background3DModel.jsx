
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Model } from './Model';

export default function Background3DModel() {
  const modelRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    modelRef.current.position.y = Math.sin(time) * 0.2;
  });

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[0, 0.5]}
      >
        <group ref={modelRef}>
          <Model />
        </group>
      </Float>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
}
