import react from "react";
import reactDom from "react-dom";
import ProjectTile from "./ProjectTile.js"

function AllProjectTiles() {
    return <div className="allProjectTiles">
        <ProjectTile
            name="The Plane Game"
            videoId="g_BBcKTlg6E"
            description="My first publicly released application. 
            It is an arcade game where you fly around as a jet fighter trying to shoot as many targets as you can whilst dodging incoming missiles and enemy laser turrets. 
            There are a number of boss battles ranging from a mother ship that spawns other enemies that chase after you to a tank that shoots giant lasers."
        />
        <ProjectTile
            name="Unity 3D Random Island Generation"
            videoId="2h_hzFjcd3k"
            description="Random map generation using perlin noise to create terrain feautrest that uses a fall off map to create the island structure.
            The generated model also paints it's self based on the hieght of the terrain. Lowest being sand and highest being mountains.
            In another version I added dynamicly spawning trees and rocks to the 3d island.
            "
        /><ProjectTile
            name="Tile Based City Builder"
            videoId="4eXOKviLZlA"
            description="This is a protoype game I made to display my knowledge of 2d arrays.
            Each grid object has it's own characteristics, holding what type the building is on it, a reference to the actual model on it, it's position and facing direction.
            It also checks to see if there is a road in the correct facing direction of the building that is on that tile and if so enables the fuctionallity of said building
            The economy and population growth is simulated purley by math taking in how many work places and housing space is avalibe to calcuate the income value of the city.
            If their are houses and no where to work or if there is work but no where to live the population growth will decline but if there is housing space and a place to work population will increase.
            Also if there is no where for the people to work and the city has an excess of people the city will be forced to pay social welfare decreasing the cities income.
            "
        /><ProjectTile
            name="ZomBoy"
            videoId="hLCd2h2e3no"
            description="A simple 2d never ending zomebie arena where the player must shoot the zombies to see how long they can survive. 
            The Ai uses a simplistic navigate method to find their way to the player. 
            The player can pick up and equip/use in game items through a hotkey bar and inventory list."
        /><ProjectTile
            name="Rts Airport"
            videoId="J7CcvQZNSTU"
            description="A small simulation of jets taxing and taking off from an airport then landing again.
            The jets use physcis based movement and a waypoint system to navigate around the world."
        />
    </div>;
}

export default AllProjectTiles