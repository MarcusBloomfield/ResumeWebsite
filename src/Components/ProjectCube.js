import { Html, PresentationControls } from '@react-three/drei'
import { Text, TrackballControls } from '@react-three/drei'
import React from 'react'

export default class ProjectCube extends React.Component {
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
        this.props.ass(this.props.cubePosition);
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
            <Html transform position={this.props.htmlPositionFront} rotation={this.props.htmlRotationFront} occlude >
                <div className='cube animate__animated animate__fadeIn' onClick={this.fuckbitchslut} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.TitleFront} </h1>
                    {this.props.TextFront}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionLeft} rotation={this.props.htmlRotationLeft} occlude >
                <div className='cube animate__animated animate__fadeIn' onClick={this.fuckbitchslut} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.TitleLeft} </h1>
                    {this.props.TextLeft}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionRight} rotation={this.props.htmlRotationRight} occlude >
                <div className='cube animate__animated animate__fadeIn' onClick={this.fuckbitchslut} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.TitleRight} </h1>
                    {this.props.TextRight}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionBack} rotation={this.props.htmlRotationBack} occlude>
                <div className='cube animate__animated animate__fadeIn' onClick={this.fuckbitchslut} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.TitleBack} </h1>
                    {this.props.TextBack}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionTop} rotation={this.props.htmlRotationTop} occlude>
                <div className='cube animate__animated animate__fadeIn' onClick={this.fuckbitchslut} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.TitleTop} </h1>
                    {this.props.TextTop}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionBottom} rotation={this.props.htmlRotationBottom} occlude >
                <div className='cube animate__animated animate__fadeIn' onClick={this.fuckbitchslut} onPointerEnter={this.hoverColor} onPointerLeave={this.normalColor}>
                    <h1> {this.props.TitleBottom} </h1>
                    {this.props.TextBottom}
                </div>

            </Html>
        </mesh >
    }
}