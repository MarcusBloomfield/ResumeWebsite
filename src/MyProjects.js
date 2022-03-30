import MyFooter from "./Components/MyFooter";
import MyHeader from "./Components/MyHeader";
import MyMainContent from "./Components/MyMainContent";
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import { useThree } from "@react-three/fiber";
import "./Css/MyProjects.css";
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { OrbitControls, Bounds, BakeShadows } from '@react-three/drei'

function MyProjects() {
  return (
    <div className="MyProjects">
      <Canvas camera={{ position: [-10, 5, 15], fov: 5 }}>
        <color attach="background" args={['#4B6169']} />
        <OrbitControls
          makeDefault
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableZoom={true}
          enablePan={true}
          zoomSpeed={1}
        />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        {
          box()
        }

        <BakeShadows />
        <CameraRig />
      </Canvas>
    </div>
  );
}
function box() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );

}
function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.lookAt(0, 0, 0)
  })
}

export default MyProjects;