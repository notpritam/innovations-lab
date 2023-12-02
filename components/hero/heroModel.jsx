"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/models/dog.glb");
  return <primitive object={scene} {...props} />;
}

function HeroModel() {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]} camera={{ fov: 45 }}>
      <color attach="background" args={["#020817"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"}>
          <Model scale={1} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default HeroModel;
