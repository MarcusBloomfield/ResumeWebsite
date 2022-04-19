import { Html } from '@react-three/drei'
import React from 'react'

export default class SwitchCube extends React.Component {
    constructor(props) {
        super(props);
        this.setTargetPosition = this.setTargetPosition.bind(this);
        this.hoverColor = this.hoverColor.bind(this)
        this.normalColor = this.normalColor.bind(this)
        this.state = {
            color: ''
        };
    }
    setTargetPosition() {
        this.props.targetPosition(this.props.destinationPosition);
    }
    hoverColor() {
        this.setState({ color: 'lightblue' })
        console.log("Enter", this.state.color)
    }
    normalColor() {
        this.setState({ color: 'white' })
        console.log("Leave", this.state.color)
    }
    render() {
        return <mesh
            onClick={this.setTargetPosition}
            onPointerEnter={this.hoverColor}
            onPointerLeave={this.normalColor}
            position={this.props.cubePosition}
            rotation={this.props.cubeRotation}>
            <boxGeometry args={this.props.cubeScale} onPointerEnter={this.hoverColor} />
            <meshStandardMaterial color={this.state.color} onPointerEnter={this.hoverColor} />
            <Html transform position={this.props.htmlPosition} rotation={this.props.htmlRotation} occlude >
                <div className='switchCube animate__animated animate__fadeIn' onClick={this.setTargetPosition} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.Title} </h1>
                </div>

            </Html>
        </mesh >
    }
}