import MyFooter from "./Components/MyFooter";
import Experience from "./Components/Experience.js";
import References from "./Components/References.js";
import AboutMe from "./Components/AboutMe.js";
import MyHeader from "./Components/MyHeader";
import NavBar from "./Components/NavBar";
import Greeting from "./Components/Greating";

function About() {
  return (
    <>
      <div className="header animate__animated animate__bounceInLeft">
        <MyHeader />
        <NavBar className="navBar" />
        <Greeting className="greeting" />
      </div>
      <div className="aboutCore">
        <AboutMe className="aboutMe animate__animated animate__bounceInRight" />
        <Experience className="experience animate__animated animate__bounceInLeft" />
        <References className="references animate__animated animate__bounceInRight" />
        <MyFooter className="footer" />
      </div>
    </>
  );
}

export default About;