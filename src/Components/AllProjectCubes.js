import ProjectCube from './ProjectCube';
import React from 'react'

export default class AllProjectCubes extends React.Component {
    constructor(props) {
        super(props);
        this.setTargetPosition = this.setTargetPosition.bind(this);
    }
    setTargetPosition(val) {
        this.props.targetPosition(val);
    }

    render() {
        return <group>
            <ProjectCube cubePosition={[0, 0, 0]} cubeRotation={[0, 0, 0]} cubeScale={[3, 3, 3]}
                htmlPositionFront={[0, 0, 1.51]} htmlRotationFront={[0, 0, 0]}
                htmlPositionLeft={[1.51, 0, 0]} htmlRotationLeft={[0, 1.57, 0]}
                htmlPositionRight={[-1.51, 0, 0]} htmlRotationRight={[0, -1.57, 0]}
                htmlPositionBack={[0, 0, -1.51]} htmlRotationBack={[0, 3.15, 0]}
                htmlPositionTop={[0, 1.51, 0]} htmlRotationTop={[1.6, 3.15, 0]}
                htmlPositionBottom={[0, -1.51, 0]} htmlRotationBottom={[-1.6, 3.15, 0]}

                TitleFront="Home"
                TitleRight="Home"
                TitleLeft="Home"
                TextFront="Hold Left Click and move the mouse to move the camera. Click on a project cube to go to it or click the little cubes with names to go to a project cube. Use scroll wheel to zoom in."
                TextLeft="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                TextRight="aaaaaaaaaaaaaaaaaaaaaaaaweeee"
                TextBack="FAQ"
                TitleTop="FAQ"
                TextTop="FAQ"
                targetPosition={this.setTargetPosition}
            />

            <ProjectCube cubePosition={[-8, 0, -21]} cubeRotation={[0, .4, 0]} cubeScale={[3, 3, 3]}
                htmlPositionFront={[0, 0, 1.51]} htmlRotationFront={[0, 0, 0]}
                htmlPositionLeft={[1.51, 0, 0]} htmlRotationLeft={[0, 1.57, 0]}
                htmlPositionRight={[-1.51, 0, 0]} htmlRotationRight={[0, -1.57, 0]}
                htmlPositionBack={[0, 0, -1.51]} htmlRotationBack={[0, 3.15, 0]}
                htmlPositionTop={[0, 1.51, 0]} htmlRotationTop={[1.6, 3.15, 0]}
                htmlPositionBottom={[0, -1.51, 0]} htmlRotationBottom={[-1.6, 3.15, 0]}

                TitleFront="The Plane Game"
                TextFront="My first publicly released application. 
            It is an arcade game where you fly around as a jet fighter trying to shoot as many targets as you can whilst dodging incoming missiles and enemy laser turrets. 
            There are a number of boss battles ranging from a mother ship that spawns other enemies that chase after you to a tank that shoots giant lasers."
                TitleLeft="How I Started Programming"
                TextLeft="FAQ"
                TitleRight="GameDev Or Programming"
                TextRight="FAQ"
                TitleBack="vFAQ"
                TextBack="FAQ"
                TitleTop="FAQ"
                TextTop="FAQ"
                targetPosition={this.setTargetPosition}
            />

            <ProjectCube cubePosition={[8, 0, -21]} cubeRotation={[0, -.4, 0]} cubeScale={[3, 3, 3]}
                htmlPositionFront={[0, 0, 1.51]} htmlRotationFront={[0, 0, 0]}
                htmlPositionLeft={[1.51, 0, 0]} htmlRotationLeft={[0, 1.57, 0]}
                htmlPositionRight={[-1.51, 0, 0]} htmlRotationRight={[0, -1.57, 0]}
                htmlPositionBack={[0, 0, -1.51]} htmlRotationBack={[0, 3.15, 0]}
                htmlPositionTop={[0, 1.51, 0]} htmlRotationTop={[1.6, 3.15, 0]}
                htmlPositionBottom={[0, -1.51, 0]} htmlRotationBottom={[-1.6, 3.15, 0]}

                TitleFront="About Me"
                TextFront="I began learning how to code C# in Unity in 2018 and launched my first app on the Play Store in 2019. Software development is my passion. 
            The creative and problem-solving mindset that is required by coding is why I love programming and will make a valued addition to any team. I am seeking an opportunity to further spark my professional 
            development. 
            Every problem has a solution, I hope I am always as excited as I am today to solve them."
                TitleLeft="How I Started Programming"
                TextLeft="FAQ"
                TitleRight="EXPERIENCE"
                TextRight=" 2018 - Current Unity, C# Developer In 2019 my first app launched on the Google Play Store.
                I have also been learning how to market products using Google Ads in order to reach a larger audience with this and future releases.
                I have also been working on smaller side projects which include smaller games and react based websites as well as my passion project. My passion project is a city building strategy game that has an in-game intelligence system, which is intended to allow for a greater level of realism. Making games is a huge challenge but I welcome it.
                Current Blender, 3D Modeler and Animator When creating games for my unity projects, I came across the obstacle of the limited library unity offered. 
                I taught myself how to use Blender, now I’m experienced with its interface, 3D modelling methods and animation. 
                2018 - Current Self-Taught 2020 - 2021 Certificate IV in Programming, UpSkilled I have completed a certificate four in programming. 
                In this course I learn agile development processes, application documentation, .Net, C#, SQL and Xamarin."
                TitleBack="vFAQ"
                TextBack="FAQ"
                TitleTop="FAQ"
                TextTop="FAQ"
                targetPosition={this.setTargetPosition}
            />

            <ProjectCube cubePosition={[16, 8, -18]} cubeRotation={[0, -.6, 0]} cubeScale={[3, 3, 3]}
                htmlPositionFront={[0, 0, 1.51]} htmlRotationFront={[0, 0, 0]}
                htmlPositionLeft={[1.51, 0, 0]} htmlRotationLeft={[0, 1.57, 0]}
                htmlPositionRight={[-1.51, 0, 0]} htmlRotationRight={[0, -1.57, 0]}
                htmlPositionBack={[0, 0, -1.51]} htmlRotationBack={[0, 3.15, 0]}
                htmlPositionTop={[0, 1.51, 0]} htmlRotationTop={[1.6, 3.15, 0]}
                htmlPositionBottom={[0, -1.51, 0]} htmlRotationBottom={[-1.6, 3.15, 0]}

                TitleFront="Unity 3D Random Island Generation"
                TextFront="Random map generation using perlin noise to create terrain feautrest that uses a fall off map to create the island structure.
            The generated model also paints it's self based on the hieght of the terrain. Lowest being sand and highest being mountains.
            In another version I added dynamicly spawning trees and rocks to the 3d island"
                TitleLeft="How I Started Programming"
                TextLeft="FAQ"
                TitleRight="GameDev Or Programming"
                TextRight="FAQ"
                TitleBack="vFAQ"
                TextBack="FAQ"
                TitleTop="FAQ"
                TextTop="FAQ"
                targetPosition={this.setTargetPosition}
            />

            <ProjectCube cubePosition={[-16, 8, -18]} cubeRotation={[0, .7, 0]} cubeScale={[3, 3, 3]}
                htmlPositionFront={[0, 0, 1.51]} htmlRotationFront={[0, 0, 0]}
                htmlPositionLeft={[1.51, 0, 0]} htmlRotationLeft={[0, 1.57, 0]}
                htmlPositionRight={[-1.51, 0, 0]} htmlRotationRight={[0, -1.57, 0]}
                htmlPositionBack={[0, 0, -1.51]} htmlRotationBack={[0, 3.15, 0]}
                htmlPositionTop={[0, 1.51, 0]} htmlRotationTop={[1.6, 3.15, 0]}
                htmlPositionBottom={[0, -1.51, 0]} htmlRotationBottom={[-1.6, 3.15, 0]}

                TitleFront="ZomBoy"
                TextFront="This is a protoype game I made to display my knowledge of 2d arrays.
            Each grid object has it's own characteristics, holding what type the building is on it, a reference to the actual model on it, it's position and facing direction.
            It also checks to see if there is a road in the correct facing direction of the building that is on that tile and if so enables the fuctionallity of said building
            The economy and population growth is simulated purley by math taking in how many work places and housing space is avalibe to calcuate the income value of the city.
            If their are houses and no where to work or if there is work but no where to live the population growth will decline but if there is housing space and a place to work population will increase.
            Also if there is no where for the people to work and the city has an excess of people the city will be forced to pay social welfare decreasing the cities income."
                TitleLeft="How I Started Programming"
                TextLeft="FAQ"
                TitleRight="GameDev Or Programming"
                TextRight="FAQ"
                TitleBack="vFAQ"
                TextBack="FAQ"
                TitleTop="FAQ"
                TextTop="FAQ"
                targetPosition={this.setTargetPosition}
            />

            <ProjectCube cubePosition={[-22, 0, -12.5]} cubeRotation={[0, .8, 0]} cubeScale={[3, 3, 3]}
                htmlPositionFront={[0, 0, 1.51]} htmlRotationFront={[0, 0, 0]}
                htmlPositionLeft={[1.51, 0, 0]} htmlRotationLeft={[0, 1.57, 0]}
                htmlPositionRight={[-1.51, 0, 0]} htmlRotationRight={[0, -1.57, 0]}
                htmlPositionBack={[0, 0, -1.51]} htmlRotationBack={[0, 3.15, 0]}
                htmlPositionTop={[0, 1.51, 0]} htmlRotationTop={[1.6, 3.15, 0]}
                htmlPositionBottom={[0, -1.51, 0]} htmlRotationBottom={[-1.6, 3.15, 0]}

                TitleFront="Rts Airport"
                TextFront="A small simulation of jets taxing and taking off from an airport then landing again.
             The jets use physcis based movement and a waypoint system to navigate around the world."
                TitleLeft="How I Started Programming"
                TextLeft="FAQ"
                TitleRight="GameDev Or Programming"
                TextRight="FAQ"
                TitleBack="vFAQ"
                TextBack="FAQ"
                TitleTop="FAQ"
                TextTop="FAQ"
                targetPosition={this.setTargetPosition}
            />

            <ProjectCube cubePosition={[22, 0, -12.5]} cubeRotation={[0, -.8, 0]} cubeScale={[3, 3, 3]}
                htmlPositionFront={[0, 0, 1.51]} htmlRotationFront={[0, 0, 0]}
                htmlPositionLeft={[1.51, 0, 0]} htmlRotationLeft={[0, 1.57, 0]}
                htmlPositionRight={[-1.51, 0, 0]} htmlRotationRight={[0, -1.57, 0]}
                htmlPositionBack={[0, 0, -1.51]} htmlRotationBack={[0, 3.15, 0]}
                htmlPositionTop={[0, 1.51, 0]} htmlRotationTop={[1.6, 3.15, 0]}
                htmlPositionBottom={[0, -1.51, 0]} htmlRotationBottom={[-1.6, 3.15, 0]}

                TitleFront="HardShip"
                TextFront="EEEEEEEEEEEEEEEEEEE"
                TitleLeft="How I Started Programming"
                TextLeft="FAQ"
                TitleRight="GameDev Or Programming"
                TextRight="FAQ"
                TitleBack="vFAQ"
                TextBack="FAQ"
                TitleTop="FAQ"
                TextTop="FAQ"
                targetPosition={this.setTargetPosition}
            />
        </group>
    }

}