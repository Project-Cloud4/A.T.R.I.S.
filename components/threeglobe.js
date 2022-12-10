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
      <meshStandardMaterial color={props.props.color} />
    </mesh>
  );
}

const Earth = () => {
  const modelEnv = useRef();
  let rotationDest = 3;
  let currentRotation = 0;
  let coordinates = { x: 1452, z: 4976, y: 3693 };
  let earthRadius = 6397;
  useFrame((state, delta) => {
    CurrentRotation = MathUtils.lerp(CurrentRotation, RotationDest, 0.05); //linear interpolation
    ModelEnv.current.rotation.y = CurrentRotation;
  });

  return (
    <mesh ref={modelEnv}>
      <Model />
      <Box
        props={{
          position: [
            coordinates.x / earthRadius,
            coordinates.z / earthRadius,
            coordinates.y / earthRadius,
          ],
          color: "red",
          xyz: [0.1, 0.1, 0.1],
        }}
      />
    </mesh>
  );
};

export default function ThreeGlobe() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <OrbitControls />
        <Earth />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
