import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import "./Css/MyProjects.css";
import * as THREE from 'three'
import { Suspense } from 'react'
import { OrbitControls, BakeShadows, FirstPersonControls, FlyControls, PointerLockControls } from '@react-three/drei'
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
        < OrbitControls />
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

          <ProjectCube cubePosition={[0, 0, 0]} cubeRotation={[0, 0, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]}
            Title="Home"
            Blurb="Hold Left Click and move the mouse to move the camera."
          />

          <ProjectCube cubePosition={[-8, 0, -21]} cubeRotation={[0, .4, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]}
            Title="The Plane Game"
            Blurb="My first publicly released application. 
            It is an arcade game where you fly around as a jet fighter trying to shoot as many targets as you can whilst dodging incoming missiles and enemy laser turrets. 
            There are a number of boss battles ranging from a mother ship that spawns other enemies that chase after you to a tank that shoots giant lasers."
          />

          <ProjectCube cubePosition={[8, 0, -21]} cubeRotation={[0, -.4, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]}
            Title="About Me"
            Blurb="I began learning how to code C# in Unity in 2018 and launched my first app on the Play Store in 2019. Software development is my passion. 
            The creative and problem-solving mindset that is required by coding is why I love programming and will make a valued addition to any team. I am seeking an opportunity to further spark my professional development. 
            Every problem has a solution, I hope I am always as excited as I am today to solve them."
          />

          <ProjectCube cubePosition={[29, 0, 1]} cubeRotation={[0, -1.3, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]}
            Title="Unity 3D Random Island Generation"
            Blurb="Random map generation using perlin noise to create terrain feautrest that uses a fall off map to create the island structure.
            The generated model also paints it's self based on the hieght of the terrain. Lowest being sand and highest being mountains.
            In another version I added dynamicly spawning trees and rocks to the 3d island"
          />

          <ProjectCube cubePosition={[-29, 0, 1]} cubeRotation={[0, 1.3, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]}
            Title="ZomBoy"
            Blurb="This is a protoype game I made to display my knowledge of 2d arrays.
            Each grid object has it's own characteristics, holding what type the building is on it, a reference to the actual model on it, it's position and facing direction.
            It also checks to see if there is a road in the correct facing direction of the building that is on that tile and if so enables the fuctionallity of said building
            The economy and population growth is simulated purley by math taking in how many work places and housing space is avalibe to calcuate the income value of the city.
            If their are houses and no where to work or if there is work but no where to live the population growth will decline but if there is housing space and a place to work population will increase.
            Also if there is no where for the people to work and the city has an excess of people the city will be forced to pay social welfare decreasing the cities income."
          />

          <ProjectCube cubePosition={[-22, 0, -12.5]} cubeRotation={[0, .8, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]}
            Title="Rts Airport"
            Blurb="A small simulation of jets taxing and taking off from an airport then landing again.
             The jets use physcis based movement and a waypoint system to navigate around the world."
          />


          <ProjectCube cubePosition={[22, 0, -12.5]} cubeRotation={[0, -.8, 0]} cubeScale={[3, 3, 3]} htmlPosition={[0, 0, 1.51]} htmlRotation={[0, 0, 0]}
            Title="HardShip"
            Blurb="The bane of my heart."
          />

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