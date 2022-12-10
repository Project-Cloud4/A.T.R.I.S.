import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./assets/globe";
import { MathUtils, Box3 } from "three";

function Box(props) {
  //todo add opacitiy hover
  const mesh = useRef();
  return (
    <mesh position={props.props.position} ref={mesh}>
      <boxGeometry args={props.props.xyz} />
      <meshStandardMaterial
        opacity={"1"}
        transparent="true"
        color={props.props.color}
      />
    </mesh>
  );
}

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
      <Box
        props={{
          position: [1452 / 6371 - 0.1, 4976 / 6371 + 0.1, 3693 / 6371 + 0.1],
          color: "red",
          xyz: [0.1, 0.1, 0.1],
        }}
      />
    </mesh>
  );
};

export default function ThreeGlobe() {
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
