import MyFooter from "./Components/MyFooter";
import Experience from "./Components/Experience.js";
import References from "./Components/References.js";
import AboutMe from "./Components/AboutMe.js";
import MyHeader from "./Components/MyHeader";
import NavBar from "./Components/NavBar";

function About() {
  return (
    <div className="aboutCore">
      <MyHeader className="header animate__animated animate__bounceInLeft" />
      <NavBar className="navBar animate__animated animate__bounceInRight" />
      <AboutMe className="aboutMe animate__animated animate__bounceInLeft"/>
      <Experience className="experience animate__animated animate__bounceInRight"/>
      <References className="references animate__animated animate__bounceInLeft"/>
      <MyFooter className="footer"/>
    </div>
  );
}

export default About;