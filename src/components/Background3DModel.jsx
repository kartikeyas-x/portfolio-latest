import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useFBX, OrbitControls } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const fbx = useFBX(modelPath);
  return <primitive object={fbx} scale={0.01} />;
};

const Background3DModel = ({ modelPath }) => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Background3DModel;
