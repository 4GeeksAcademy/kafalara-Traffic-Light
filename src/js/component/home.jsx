import React, { useState } from "react";
import ReactDOM from "react-dom";


const TrafficLight = () => {
  // El componente debe tener un estado que almacene el color actual que debe brillar, para ello uso el hook useState de la siguiente manera:
  const [color, setColor] = useState("red");

  return (
    <div id="container">
      <div
        className={`light red ${color === "red" ? "selected" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "selected" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "selected" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};

// Utiliza ReactDOM.render para procesar el componente en el DOM
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

export default TrafficLight;
