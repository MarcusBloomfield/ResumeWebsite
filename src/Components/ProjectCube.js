import { Html } from '@react-three/drei'

export default function ProjectCube({ ...props }) {
    return < mesh position={props.cubePosition} rotation={props.cubeRotation}>
        <boxGeometry args={props.cubeScale} />
        <meshStandardMaterial />
        <Html transform position={props.htmlPosition} rotation={props.htmlRotation} occlude >
            <div className='cube'>
                <h1> {props.Title} </h1>
                {props.Blurb}
            </div>

        </Html>
    </mesh >
}