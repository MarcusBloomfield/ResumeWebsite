import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";
import Greeting from "./Components/Greating";
import MyHeader from "./Components/MyHeader";
import NavBar from "./Components/NavBar";

function Home() {
    return (
        <div className="homeCore" >
            <MyHeader className="header" />
            <NavBar className="navBar"/>
            <Greeting className="greeting" />
            <MyMainContent className="mainContent" />
            <MyFooter className="footer" />
        </div>
    );
}

export default Home;