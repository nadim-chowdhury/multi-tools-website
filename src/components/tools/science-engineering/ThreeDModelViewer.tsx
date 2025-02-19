import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} scale={1} />;
}

export default function ThreeDModelViewer() {
  return (
    <div className="h-96 w-full bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-center">3D Model Viewer</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Model url="/model.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
