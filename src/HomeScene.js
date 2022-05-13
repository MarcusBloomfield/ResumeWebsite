import { Canvas, useFrame } from '@react-three/fiber'
import "./Css/HomeScene.css";
import { OrbitControls, BakeShadows } from '@react-three/drei'
import React, { useRef, useState, Suspense } from 'react'
import AllProjectCubes from './Components/AllProjectCubes';
import Decorations from './Components/Decorations';
import AllSwitchCubes from './Components/AllSwitchCubes';

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
  }

  render() {
    return (
      <div className="homeScene">
        <Canvas camera={{ position: [-10, 5, 25], fov: 11, near: 1, far: 500 }}>
          <color attach="background" args={['#4B6169']} />
          <ambientLight intensity={0.1} />
          <directionalLight color="White" position={[0, 0, 5]} intensity={0.5} castShadow />
          <Suspense fallback={null}>
            <AllProjectCubes position={[0, 0, 0]} targetPosition={this.handleChange} />
            <AllSwitchCubes position={[0, 0, 0]} targetPosition={this.handleChange} />
            <Decorations position={[0, 0, 0]} />
            <CustomCameraRig cubePosX={this.state.selectedCubePosition[0]} cubePosY={this.state.selectedCubePosition[1]} cubePosZ={this.state.selectedCubePosition[2]} />
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

export default HomeScene;