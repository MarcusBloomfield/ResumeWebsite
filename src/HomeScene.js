import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import "./Css/MyProjects.css";
import * as THREE from 'three'
import { Suspense } from 'react'
import { OrbitControls, BakeShadows } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import MyHeader from "./Components/MyHeader.js"
import NavBar from './Components/NavBar';
import FloatingIsland from './Models/FloatingIsland.js'
import LittleHouse from './Models/LittleHouse.js'
import Deer from './Models/Deer.js'
import DeerF from './Models/DeerF.js'
import SingleEngine from './Models/SingleEngine'
import Missile from './Models/Missile.js'
import FlyingJet from './Models/FlyingJet.js'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import YouTubePlayer from './Components/YouTubePlayer.js'
import ProjectCube from './Components/ProjectCube';

function HomeScene() {
  return (
    <div className="myProjects">
      <Canvas camera={{ position: [-10, 5, 25], fov: 11 }}>
        <color attach="background" args={['#4B6169']} />
        <OrbitControls minDistance={44} maxDistance={333} />
        <ambientLight intensity={0.1} />
        <directionalLight color="White" position={[0, 0, 5]} intensity={0.5} castShadow />
        <Suspense fallback={null}>
          <FloatingIsland position={[-3, 0, 0]} rotationAmount={.002} />
          <FloatingIsland position={[-3.5, 1, 0]} rotationAmount={-.002} />
          <FloatingIsland position={[-3.5, -1, 0]} rotationAmount={-.002} />
          <LittleHouse position={[4, 0, 0]} />
          <Deer position={[4.3, -2, 0]} />
          <DeerF position={[4, -2, 0]} />
          <SingleEngine position={[4, 1.7, 0]} rotationAmount={0.001} />
          <FlyingJet position={[-7, -1, 3]} />
          <ProjectCube cubePosition={[0, 0, 0]} cubeRotation={[0, 0, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]} Title="fuck" Blurb="i eat ass every day bro " />
          <ProjectCube cubePosition={[22, 0, 12]} cubeRotation={[0, -.9, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]} Title="fucky" Blurb="i eeeeeeeeeeeeat ass every day  bro" />
          <ProjectCube cubePosition={[-22, 0, 12]} cubeRotation={[0, .9, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]} Title="fucker" Blurb="i eateeerwegerthryjretj ass every ergergday bro " />
        </Suspense >
        <BakeShadows />
        <CameraRig />
      </Canvas>
    </div >
  );
}
function CameraRig() {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.lookAt(0, 0, 0)
  })
}

export default HomeScene;