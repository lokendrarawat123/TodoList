import "./Togle.css";
import { useState } from "react";

export default function TogleSwitch() {
  const [isOn,setIsOn]=useState(false);
  const handleToggleswitch =()=>
  {
    setIsOn(!isOn);
  };
   const BgColor={ backgroundColor: isOn ? "#4ca450":"rgb(207, 211, 212)"};

  return (
    <div  onClick={handleToggleswitch} className="togle-switch" style={BgColor}>
      <div className={`switch ${isOn ? "on":"off"}`} >
        <span  className="switch-state">{isOn ? "ON":"OFF"}</span>
      </div>
    </div>
  )
}
