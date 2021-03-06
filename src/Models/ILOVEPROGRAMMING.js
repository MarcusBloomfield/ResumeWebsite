/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ResumeWebsite/ILOVEPROGRAMMING.gltf')
  useFrame((state, delta) => (
    group.current.position.x = Math.sin(state.clock.getElapsedTime() / 5) * 55,
    group.current.position.y = 8 + Math.sin(state.clock.getElapsedTime() * 5)
  ))
  return (
    <group ref={group} {...props} dispose={null} scale={[0.05, .05, .05]} rotation={[0, 4.7, 0]} position={[0, 8, 0]}>
      <mesh geometry={nodes.I.geometry} material={materials['Material.001']} position={[0, 0.22, -0.07]} />
    </group>
  )
}

useGLTF.preload('/ResumeWebsite/ILOVEPROGRAMMING.gltf')
