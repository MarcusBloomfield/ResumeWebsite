import React from 'react'
import SwitchCube from './SwitchCube.js'

export default class AllSwitchCubes extends React.Component {
    constructor(props) {
        super(props);
        this.setTargetPosition = this.setTargetPosition.bind(this);
    }
    setTargetPosition(val) {
        this.props.targetPosition(val);
    }

    render() {
        return <group>
            <SwitchCube cubePosition={[1.3, 1.9, -1]} cubeRotation={[0, -.5, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[22, 0, -12.5]} targetPosition={this.setTargetPosition} Title="HardShip" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[-1.3, 1.9, -1]} cubeRotation={[0, .5, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[-22, 0, -12.5]} targetPosition={this.setTargetPosition} Title="AirPort" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[.4, 1.9, -1.3]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[8, 0, -21]} targetPosition={this.setTargetPosition} Title="About" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[-.4, 1.9, -1.3]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[-8, 0, -21]} targetPosition={this.setTargetPosition} Title="TPG" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[-.9, 2.5, -1.2]} cubeRotation={[0, .35, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[-16, 8, -18]} targetPosition={this.setTargetPosition} Title="ZomBoy" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[.9, 2.5, -1.2]} cubeRotation={[0, -.35, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[16, 8, -18]} targetPosition={this.setTargetPosition} Title="Island Gen" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[-7, 1.9, -21]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[0, 0, 0]} targetPosition={this.setTargetPosition} Title="Home" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[9, 1.9, -21]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[0, 0, 0]} targetPosition={this.setTargetPosition} Title="Home" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[17, 9.9, -18]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[0, 0, 0]} targetPosition={this.setTargetPosition} Title="Home" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[-15, 9.9, -18]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[0, 0, 0]} targetPosition={this.setTargetPosition} Title="Home" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[-21, 1.9, -12.5]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[0, 0, 0]} targetPosition={this.setTargetPosition} Title="Home" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
            <SwitchCube cubePosition={[23.5, 1.9, -12.5]} cubeRotation={[0, 0, 0]} cubeScale={[.4, .4, .4]} destinationPosition={[0, 0, 0]} targetPosition={this.setTargetPosition} Title="Home" htmlPosition={[0, 0, .21]} htmlRotation={[0, 0, 0]} />
        </group>
    }

}