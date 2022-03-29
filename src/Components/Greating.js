import react from "react";
import reactDom from "react-dom";

function Greeting({className}) {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) timeOfDay = "morning"
    else if (hours > 12 && hours < 20) timeOfDay = "afternoon"
    else timeOfDay = "night"

    return (<p className={className}>
        Good{timeOfDay}! It's currently {date.getHours() % 12} o'clock!
    </p>)
}

export default Greeting