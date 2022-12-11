import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./assets/globe";
import { MathUtils, Box3 } from "three";

const getCoords = (location) => {
  let earthRadius = 6397;
  let x = earthRadius * Math.cos(location.lat) * Math.cos(location.lon);
  let y = earthRadius * Math.cos(location.lat) * Math.sin(location.lon);
  let z = earthRadius * Math.sin(location.lat);
  return { x: x, y: y, z: z };
};

function Box() {
  const [loading, setLoading] = useState(true);
  const [latlng, setLatlng] = useState([]);

  useEffect(() => {
    let location = navigator.geolocation.getCurrentPosition((position) => {
      setLatlng(position.coords);
    });
  }, []);

  let [coordinates, setCoordinates] = useState({ x: 0, z: 0, y: 0 });
  useEffect(() => {
    setCoordinates({ x: 1, y: 1, z: 1 }); //getCoords({ lat: latlng.latitude, lon: latlng.longitude }));
    setLoading(false);
    console.log(coordinates);
  }, [latlng]);
  const mesh = useRef(); //tood add stuff
  return (
    <>
      {loading ? (
        <mesh position={coordinates} ref={mesh}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      ) : (
        console.log("NU MERE")
      )}
    </>
  );
}

const Earth = () => {
  const modelEnv = useRef();
  let rotationDest = 3;
  let currentRotation = 0;
  useFrame((state, delta) => {
    currentRotation = MathUtils.lerp(currentRotation, rotationDest, 0.05); //linear interpolation
    modelEnv.current.rotation.y = currentRotation;
  });

  return (
    <mesh ref={modelEnv}>
      <Model />
    </mesh>
  );
};

export default function ThreeGlobe() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <OrbitControls />
        <Earth />
        <Box />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
