import React, { useEffect, useRef } from "react";
import { MeshLambertMaterial, DoubleSide } from "three";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  let { nodes: node1, materials: material1 } = useGLTF("/low_poly_earth.glb");
  let { nodes: thing, materials: thingy } = useGLTF("/sample.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={node1.Sphere004.geometry}
        material={thingy["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={node1.Sphere004_1.geometry}
        material={thingy.Material}
      />
    </group>
  );
}

useGLTF.preload("/low_poly_earth.glb");
