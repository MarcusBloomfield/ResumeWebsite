import reactDom from "react-dom";
import "./Css/Animate.css";
import "./Css/Common.css";
import "./Css/Home.css";
import "./Css/AboutMe.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

reactDom.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);