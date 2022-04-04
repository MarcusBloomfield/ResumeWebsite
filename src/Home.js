import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";
import Greeting from "./Components/Greating";
import MyHeader from "./Components/MyHeader";
import NavBar from "./Components/NavBar";
import HomeScene from "./HomeScene";

function Home() {
    return (
        <div className="HomeContainer">
            <HomeScene />
            <div className="header">
                <MyHeader className="animate__animated animate__bounceInLeft" />
                <NavBar className="navBar animate__animated animate__bounceInLeft" />
                <Greeting className="greeting animate__animated animate__bounceInLeft" />
            </div>
            <div className="homeCore" >
                <MyFooter className="footer" />
            </div>
        </div>
    );
}

export default Home;    