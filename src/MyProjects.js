import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import "./Css/MyProjects.css";
import * as THREE from 'three'
import { Suspense } from 'react'
import { OrbitControls, BakeShadows } from '@react-three/drei'
import Bone from "./Models/Bone.js"
import Marcus from "./Models/Marcus.js"
import React, { useRef, useState } from 'react'

function MyProjects(props) {
  return (
    <div className="MyProjects">
      <Canvas camera={{ position: [-10, 5, 25], fov: 5 }}>
        <color attach="background" args={['#4B6169']} />
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="White" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Marcus position={[2, -1, 0]} />
          <Bone position={[-2, 0, 0]} />
        </Suspense >
        <BakeShadows />
        <CameraRig />
      </Canvas>
    </div>
  );
}
function CameraRig() {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.lookAt(0, 0, 0)
  })
}

export default MyProjects;