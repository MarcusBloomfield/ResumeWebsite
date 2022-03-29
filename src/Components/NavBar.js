import react from "react"
import reactDom from "react-dom"
import { Route, Link, useHistory } from "react-router-dom"

function NavBar({className}) { 
    let history = useHistory();

    const GotoMyHome = () => {
        history.push('/')
      }
    const GotoMyProjects = () => {
      history.push('/MyProjects')
    }
    const GotoMyAboutMe = () => {
      history.push('/About')
    }
    return <div className ={className}>
    <button className = "button" onClick={GotoMyHome}> Home </button>
    <button className = "button" onClick={GotoMyAboutMe}> About Me </button>
    <button className = "button"> MyProjects  </button>
    </div>
}

export default NavBar