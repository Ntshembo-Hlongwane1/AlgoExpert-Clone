import React from "react";
import Android from "../assets/android.svg";
import atom from "../assets/atom.svg";
import MonitorScreen from "../assets/coding.svg";
import "../StyleSheet/ListOfLangs.css";

interface Props {}

export const ListOfLangs = (props: Props) => {
  return (
    <div className="ListOfLangs">
      <div className="listOfLangs__header">
        <h3>We Speak 9 Languages.</h3>
      </div>
      <div className="listOfLangs__text">
        <p>
          There's nothing more frustrating than opening an interview prep book,
          only to find a bunch of solutions in a programming language that you
          don't know. That's why all of our questions come with complete written
          solutions in 9 popular languages.
        </p>
      </div>
      <div className="listOfLangs__programmingL">
        <div className="java">
          <img className="listOfLangs__icons" src={Android} alt="" />
          <h4 className="listOfLangs__name">
            <span>Java</span>,for all you Androiders
          </h4>
        </div>
        <div className="python">
          <img className="listOfLangs__icons" src={atom} alt="" />
          <h4 className="listOfLangs__name">
            <span>Python</span>, for all data scientist
          </h4>
        </div>
        <div className="typescript">
          <img className="listOfLangs__icons" src={MonitorScreen} alt="" />
          <h4 className="listOfLangs__name">
            <span>TypeScript</span>, for all web developers
          </h4>
        </div>
      </div>
    </div>
  );
};
