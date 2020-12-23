import React from "react";
import JS from "../assets/js.png";
import Go from "../assets/Golang.jpeg";
import Java from "../assets/java.png";
import Py from "../assets/python.png";
import TypeScript from "../assets/TypeScript.png";
import CP from "../assets/C++.png";
import "../StyleSheet/Cube.css";

export const Cube = () => {
  return (
    <div className="container">
      <div className="shape">
        <div className="one">
          <img src={JS} alt="" />
        </div>
        <div className="two">
          <img src={Go} alt="" />
        </div>
        <div className="three">
          <img src={Java} alt="" />
        </div>
        <div className="four">
          <img src={Py} alt="" />
        </div>
        <div className="five">
          <img src={TypeScript} alt="" />
        </div>
        <div className="six">
          <img src={CP} alt="" />
        </div>
      </div>
    </div>
  );
};
