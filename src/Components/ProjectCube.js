import { Html } from '@react-three/drei'
import React from 'react'

export default class ProjectCube extends React.Component {
    constructor(props) {
        super(props);
        this.fuckbitchslut = this.fuckbitchslut.bind(this);
    }
    fuckbitchslut() {
        this.props.ass(this.props.cubePosition);
    }
    render() {
        return <mesh
            onClick={this.fuckbitchslut}
            position={this.props.cubePosition}
            rotation={this.props.cubeRotation}>
            <boxGeometry args={this.props.cubeScale} />
            <meshStandardMaterial />
            <Html transform position={this.props.htmlPositionFront} rotation={this.props.htmlRotationFront} occlude >
                <div className='cube'>
                    <h1> {this.props.TitleFront} </h1>
                    {this.props.TextFront}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionLeft} rotation={this.props.htmlRotationLeft} occlude >
                <div className='cube'>
                    <h1> {this.props.TitleLeft} </h1>
                    {this.props.TextLeft}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionRight} rotation={this.props.htmlRotationRight} occlude >
                <div className='cube'>
                    <h1> {this.props.TitleRight} </h1>
                    {this.props.TextRight}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionBack} rotation={this.props.htmlRotationBack} occlude >
                <div className='cube'>
                    <h1> {this.props.TitleBack} </h1>
                    {this.props.TextBack}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionTop} rotation={this.props.htmlRotationTop} occlude >
                <div className='cube'>
                    <h1> {this.props.TitleTop} </h1>
                    {this.props.TextTop}
                </div>

            </Html>
            <Html transform position={this.props.htmlPositionBottom} rotation={this.props.htmlRotationBottom} occlude >
                <div className='cube'>
                    <h1> {this.props.TitleBottom} </h1>
                    {this.props.TextBottom}
                </div>

            </Html>
        </mesh >
    }
}