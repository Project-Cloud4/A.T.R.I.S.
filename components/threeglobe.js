import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./assets/globe";
import { MathUtils, Box1, Vector3 } from "three";

function lonLatToVector3(lng, lat, out) {
  out = out || new Vector3();

  //flips the Y axis
  lat = Math.PI / 2 - lat;

  //distribute to sphere
  out.set(
    Math.sin(lat) * Math.sin(lng),
    Math.cos(lat),
    Math.sin(lat) * Math.cos(lng)
  );

  return out;
}

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
    let coord = lonLatToVector3(latlng.longitude, latlng.latitude);
    //console.log(  latlng);
    coord.y = coord.y + 0.4;
    coord.z = coord.z - 0.3;
    coord.x = coord.x - 0.4;
    setCoordinates(coord);
    console.log(coord);

    //console.log(coordinates);
  }, [latlng]);

  const mesh = useRef(); //tood add stuff
  return (
    <mesh position={coordinates} ref={mesh}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

const Earth = () => {
  const modelEnv = useRef();
  //let rotationDest = 0.1;
  //  let currentRotation = 0;
  useFrame((state, delta) => {
    // currentRotation = MathUtils.lerp(currentRotation, rotationDest, 0.05); //linear interpolation
    // modelEnv.current.rotation.y = currentRotation;
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
