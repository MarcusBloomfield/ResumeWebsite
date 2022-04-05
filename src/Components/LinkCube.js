import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef, useState } from 'react'

export default function LinkCube({ ...props }) {
    const group = useRef()
    useFrame((state, delta) => (
        group.current.rotation.y += 1 * delta
    ))
    return <mesh
        ref={group}
        scale={[.5, .5, .5]}
        position={props.cubePosition}>
        <boxGeometry args={props.cubeScale} />
        <meshStandardMaterial />
        <Html transform positionFront={[0, 0, 0]} rotationFront={[0, 0, 0]} occlude >
            <div className='cube animate__animated animate__fadeIn'>
                <a href="https://github.com/BastingSumo" rel="noreferrer">GitHub</a><div></div>
                <a href="https://www.youtube.com/channel/UC3WBEpmhnvW3ILqzr9eDR5Q" rel="noreferrer">YouTube</a>
            </div >

        </Html>
        <Html transform positionLeft={[1.51, 0, 0]} rotationLeft={[0, 1.57, 0]} occlude >

            <div className='cube animate__animated animate__fadeIn'>
                <a href="https://github.com/BastingSumo" rel="noreferrer">GitHub</a><div></div>
                <a href="https://www.youtube.com/channel/UC3WBEpmhnvW3ILqzr9eDR5Q" rel="noreferrer">YouTube</a>
            </div>

        </Html>
        <Html transform positionRight={[-1.51, 0, 0]} rotationRight={[0, -1.57, 0]} occlude >

            <div className='cube animate__animated animate__fadeIn'>
                <a href="https://github.com/BastingSumo" rel="noreferrer">GitHub</a><div></div>
                <a href="https://www.youtube.com/channel/UC3WBEpmhnvW3ILqzr9eDR5Q" rel="noreferrer">YouTube</a>
            </div >

        </Html>
        <Html transformpositionBack={[0, 0, -1.51]} rotationBack={[0, 3.15, 0]} occlude>

            <div className='cube animate__animated animate__fadeIn'>
                <a href="https://github.com/BastingSumo" rel="noreferrer">GitHub</a><div></div>
                <a href="https://www.youtube.com/channel/UC3WBEpmhnvW3ILqzr9eDR5Q" rel="noreferrer">YouTube</a>
            </div >

        </Html>
        <Html transformpositionTop={[0, 1.51, 0]} rotationTop={[1.6, 3.15, 0]} occlude>

            <div className='cube animate__animated animate__fadeIn'>
                <a href="https://github.com/BastingSumo" rel="noreferrer">GitHub</a><div></div>
                <a href="https://www.youtube.com/channel/UC3WBEpmhnvW3ILqzr9eDR5Q" rel="noreferrer">YouTube</a>
            </div >

        </Html>
        <Html transform positionBottom={[0, -1.51, 0]} rotationBottom={[-1.6, 3.15, 0]} occlude >

            <div className='cube animate__animated animate__fadeIn'>
                <a href="https://github.com/BastingSumo" rel="noreferrer">GitHub</a><div></div>
                <a href="https://www.youtube.com/channel/UC3WBEpmhnvW3ILqzr9eDR5Q" rel="noreferrer">YouTube</a>
            </div >

        </Html>
    </mesh >
}