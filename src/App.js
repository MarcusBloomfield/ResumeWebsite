import { Route } from "react-router-dom"
import Home from "./Home"
import MyProjects from "./MyProjects";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/MyProjects" component={MyProjects} />
      <Route exact path="/About" component={About} />
    </div>
  );
}

export default App;
