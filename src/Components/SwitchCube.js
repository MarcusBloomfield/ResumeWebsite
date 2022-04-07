import { Html, PresentationControls } from '@react-three/drei'
import { Text, TrackballControls } from '@react-three/drei'
import React from 'react'

export default class SwitchCube extends React.Component {
    constructor(props) {
        super(props);
        this.fuckbitchslut = this.fuckbitchslut.bind(this);
        this.hoverColor = this.hoverColor.bind(this)
        this.normalColor = this.normalColor.bind(this)
        this.state = {
            color: ''
        };
    }
    fuckbitchslut() {
        this.props.ass(this.props.destinationPosition);
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
            onClick={this.fuckbitchslut}
            onPointerEnter={this.hoverColor}
            onPointerLeave={this.normalColor}
            position={this.props.cubePosition}
            rotation={this.props.cubeRotation}>
            <boxGeometry args={this.props.cubeScale} onPointerEnter={this.hoverColor} />
            <meshStandardMaterial color={this.state.color} onPointerEnter={this.hoverColor} />
            <Html transform position={this.props.htmlPosition} rotation={this.props.htmlRotation} occlude >
                <div className='switchCube animate__animated animate__fadeIn' onClick={this.fuckbitchslut} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.Title} </h1>
                </div>

            </Html>
        </mesh >
    }
}