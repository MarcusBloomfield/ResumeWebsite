import react from "react"
import reactDom from "react-dom"
import YouTubePlayer from "./YouTubePlayer"

function ProjectTile(props) {
    return <div className="projectTile animate__animated animate__backInLeft">
        <l>
            <h1>{props.name}</h1>
            <YouTubePlayer videoId={props.videoId} />
            <p>Description</p>
            <p>{props.description}</p>
        </l>
    </div>
}

export default ProjectTile