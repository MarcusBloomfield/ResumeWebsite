/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ResumeWebsite/SingleEngine.gltf')
  let [time, timer] = useState(0)
  let [circle, circleSize] = useState(10)
  const [speed, jetSpeed] = useState(4)

  useFrame((state, delta) => (
    time += 1 * delta,
    circle = 10 + (Math.sin(time) * 5),
    group.current.position.x = props.xOffset + Math.sin(time * speed) * circle,
    group.current.position.z = props.zOffset + Math.cos(time * speed) * circle,
    group.current.rotation.y = Math.atan2(Math.sin(time * speed) * circle, Math.cos(time * speed) * circle)
  ))
  
  return (
    <group ref={group} {...props} dispose={null} scale={[.2, .2, .2]}>
      <group rotation={[-1, 0, -Math.PI / 2]} scale={[0.17, 1.12, 0.17]}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['CockPit.001']} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_3.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-4.8, 0, 0]} scale={2.38}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cylinder001_3.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cylinder001_4.geometry} material={materials['Material.006']} />
      </group>
    </group>
  )
}

useGLTF.preload('/ResumeWebsite/SingleEngine.gltf')
