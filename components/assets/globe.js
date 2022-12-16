import { useGLTF } from "@react-three/drei";

export function Model(props) {
  let { nodes: node, materials: material } = useGLTF("/earth.glb");
  let { nodes: sampleGeometry, materials: sampleMaterial } =
    useGLTF("/sample.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={node.Sphere004.geometry}
        material={sampleMaterial["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={node.Sphere004_1.geometry}
        material={sampleMaterial["Material"]}
      />
    </group>
  );
}

useGLTF.preload("/low_poly_earth.glb");
