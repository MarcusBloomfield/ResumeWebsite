import react from "react";
import reactDom from "react-dom";
import AboutMe from "./AboutMe.js"
import AllProjectTiles from "./AllProjectTiles.js";

function MyMainContent({className}) {
    return <div className={className}>
    <AllProjectTiles/>
    </div>
}

export default MyMainContent