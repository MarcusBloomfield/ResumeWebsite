/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ResumeWebsite/TPGTurret.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={[.1, .1, .1]} position={[0,5,0]}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[0.1, 1.96, 0]} scale={[1.21, 0.18, 0.18]} />
    </group>
  )
}

useGLTF.preload('/ResumeWebsite/TPGTurret.gltf')
