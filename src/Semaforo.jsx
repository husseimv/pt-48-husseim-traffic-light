import React, { useState, useEffect } from "react";
import "./Semaforo.css";

const Semaforo = () => {
  const [lightState, updateLightState] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lightState === "red") {
        updateLightState("yellow");
        console.log("The light is green");
      } if (lightState === "yellow") {
        updateLightState("green");
        console.log("The light is yellow");
      } if (lightState === "green") {
        updateLightState("red");
        console.log("The light is red");
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [lightState]);

  return (
    <>
      <div className="border__light">
        <div className={`light__first ${lightState === "red" ? "on" : ""}`}></div>
        <div className={`light__second ${lightState === "yellow" ? "on" : ""}`}></div>
        <div className={`light__third ${lightState === "green" ? "on" : ""}`}></div>
      </div>
    </>
  );
};

export default Semaforo;
