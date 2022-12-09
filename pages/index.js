import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../components/globe";
import { MathUtils } from "three";

const Earth = () => {
  const ModelEnv = useRef();
  var RotationDest = 3;
  var CurrentRotation = 0;

  useFrame((state, delta) => {
    CurrentRotation = MathUtils.lerp(CurrentRotation, RotationDest, 0.05); //linear interpolation
    ModelEnv.current.rotation.y = CurrentRotation;
  });
  return (
    <mesh ref={ModelEnv}>
      <Model />
    </mesh>
  );
};

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url('/bg-home-mobile.png')] sm:bg-[url('/bg-home.png')] bg-contain bg-no-repeat ">
      <Canvas>
        <OrbitControls />
        <Earth />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
