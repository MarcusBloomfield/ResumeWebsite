import { directive } from "@babel/types"
import react from "react"
import reactDom from "react-dom"
import Conatact from "./Contact"

function MyFooter({className}) {
   return <footer className={className}> <Conatact />  </footer>
}

export default MyFooter