import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

// @ts-ignore
import teeModel from "~/assets/3d/tee.gltf";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_0_1: THREE.Mesh;
    mesh_0_2: THREE.Mesh;
    mesh_0_3: THREE.Mesh;
    mesh_0_4: THREE.Mesh;
  };
  materials: {
    ["Bois cintre"]: THREE.MeshPhysicalMaterial;
    ["Plastique cintre"]: THREE.MeshPhysicalMaterial;
    ["Metal cintre"]: THREE.MeshPhysicalMaterial;
    ["Manches et dos T-shirt"]: THREE.MeshPhysicalMaterial;
    ["Face T-shirt"]: THREE.MeshPhysicalMaterial;
  };
};

export function TeeModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(teeModel) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[-0.109, 0.774, 0.153]} scale={0.15}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Bois cintre"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["Plastique cintre"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["Metal cintre"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials["Manches et dos T-shirt"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials["Face T-shirt"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(teeModel);
