/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ResumeWebsite/HideTent.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={[.1, .1, .1]}>
      <group position={[0.04, -0.25, 0.01]} rotation={[Math.PI, -1.54, Math.PI]} scale={[1.87, 1.69, 1.96]}>
        <mesh geometry={nodes.Cone003.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cone003_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cone003_2.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/ResumeWebsite/HideTent.gltf')
