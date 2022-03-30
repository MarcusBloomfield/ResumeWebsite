import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";
import Greeting from "./Components/Greating";
import MyHeader from "./Components/MyHeader";
import NavBar from "./Components/NavBar";
import MyProjects from "./MyProjects";

function Home() {
    return (
        <div className="HomeContainer">
            <MyProjects />
            <div className="homeCore" >
                <MyHeader className="header" />
                <NavBar className="navBar" />
                <Greeting className="greeting" />
                <MyMainContent className="mainContent" />
                <MyFooter className="footer" />
            </div>
        </div>
    );
}

export default Home;