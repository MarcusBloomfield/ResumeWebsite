import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import "./Css/MyProjects.css";
import * as THREE from 'three'
import { Suspense } from 'react'
import { OrbitControls, BakeShadows, FirstPersonControls, FlyControls, PointerLockControls, PresentationControls } from '@react-three/drei'
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
import AllProjectCubes from './Components/AllProjectCubes';
import { Vector3 } from 'three';
import { Text, TrackballControls } from '@react-three/drei'
import { Sky } from '@react-three/drei'
import ILOVEPROGRAMMING from './Models/ILOVEPROGRAMMING.js'
import HideTent from './Models/HideTent.js'
import TPGTurret from './Models/TPGTurret.js'
import WoodHouseWoodRoof from './Models/WoodHouseWoodRoof.js'
import LinkCube from './Components/LinkCube.js';
import Billboard from './Models/BillBoard.js';
import PCSetupIsland from './Models/PCSetupIsland.js'
import { Camera } from 'three';
import FarmerMarcus from './Models/FarmerMarcus.js'
import TwoStory from './Models/TwoStory.js'

class HomeScene extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedCubePosition: [0, 0, 0],
      directionalLightRotation: 0
    };
  }

  handleChange(newPos) {
    this.setState({ selectedCubePosition: newPos })
    console.log("fuck you btich", this.state.selectedCubePosition)
  }
  render() {
    return (
      <div className="myProjects">
        <Canvas camera={{ position: [-10, 5, 25], fov: 11, near: 1, far: 500 }}>
          <color attach="background" args={['#4B6169']} />
          <CustomCameraRig cubePosX={this.state.selectedCubePosition[0]} cubePosY={this.state.selectedCubePosition[1]} cubePosZ={this.state.selectedCubePosition[2]} />
          <ambientLight intensity={0.1} />
          <directionalLight color="White" position={[0, 0, 5]} intensity={0.5} castShadow />
          <Suspense fallback={null}>
            <PCSetupIsland position={[-3, 0, 0]} scale={[.5, .5, .5]} rotationAmount={-.002} yOrigin={0} />
            <FloatingIsland position={[-3.5, 1, 0]} rotationAmount={-.002} yOrigin={1} />
            <FloatingIsland position={[-3.5, -1, 0]} rotationAmount={-.002} yOrigin={-1} />
            <LittleHouse position={[4, 0, 0]} />
            <Deer position={[21.2, .87, -12.5]} />
            <DeerF position={[21, .87, -12.5]} />
            <HideTent position={[22, 1.51, -13.8]} />
            <TwoStory position={[22.7, 1.51, -13.2]} rotation={[0, -.8, 0]} />
            <SingleEngine position={[4, 1.7, 0]} rotationAmount={0.001} />
            <FlyingJet position={[-7, -1, 3]} xOffset={0} zOffset={0} />
            <AllProjectCubes position={[0, 0, 0]} ass={this.handleChange} />
            <ILOVEPROGRAMMING yOrigin={5} />
            <Billboard position={[5, -3, 4]} rotation={[0, -2, 0]} scale={[.5, .5, .5]} yOrigin={-3} />
            <FarmerMarcus position={[22.1, 1.51, -13.2]} rotation={[0, -.3, 0]} />
          </Suspense >
          <BakeShadows />
        </Canvas>
      </div >
    )
  }
}


function CustomCameraRig({ ...props }) {
  const ref = useRef()
  // this is unholy
  const [panSpeed, setPanSpeed] = useState(3)
  let [zDifference, setZDifference] = useState(0)
  let [xDifference, setXDifference] = useState(0)
  let [yDifference, setYDifference] = useState(0)
  useFrame((state, delta) => (
    setXDifference(Math.abs(ref.current.target.x - props.cubePosX)),
    setYDifference(Math.abs(ref.current.target.y - props.cubePosY)),
    setZDifference(Math.abs(ref.current.target.z - props.cubePosZ)),

    xDifference < .1 ? ref.current.target : ref.current.target.x > props.cubePosX ? ref.current.target.x -= panSpeed * xDifference * delta : ref.current.target.x += panSpeed * xDifference * delta,
    yDifference < .1 ? ref.current.target : ref.current.target.y > props.cubePosY ? ref.current.target.y -= panSpeed * yDifference * delta : ref.current.target.y += panSpeed * yDifference * delta,
    zDifference < .1 ? ref.current.target : ref.current.target.z > props.cubePosZ ? ref.current.target.z -= panSpeed * zDifference * delta : ref.current.target.z += panSpeed * zDifference * delta
  ))

  return (
    <OrbitControls ref={ref} minDistance={39} maxDistance={170} zoomSpeed={4} makeDefault />
  )
}


function Sphere(props) {
  const ref = useRef()
  useFrame((state) => (ref.current.position.x = Math.sin(state.clock.getElapsedTime())))
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default HomeScene;