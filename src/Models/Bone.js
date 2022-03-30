/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Bone.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} rotation={[-1.57, 0, 0]} scale={[0.21, 1.32, 0.21]} />
      <mesh geometry={nodes.Icosphere.geometry} material={nodes.Icosphere.material} position={[-0.22, 0, 1.33]} scale={0.38} />
      <mesh geometry={nodes.Icosphere002.geometry} material={nodes.Icosphere002.material} position={[0.27, 0, 1.33]} scale={0.38} />
      <mesh geometry={nodes.Icosphere003.geometry} material={nodes.Icosphere003.material} position={[-0.22, 0, -1.32]} scale={0.38} />
      <mesh geometry={nodes.Icosphere001.geometry} material={nodes.Icosphere001.material} position={[0.27, 0, -1.32]} scale={0.38} />
    </group>
  )
}

useGLTF.preload('/Bone.gltf')
