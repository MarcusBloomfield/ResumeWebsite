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
        </div>
    );
}

export default Home;    