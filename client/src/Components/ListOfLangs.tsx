import React from "react";
import "../StyleSheet/ListOfLangs.css";
import Android from "../assets/android.svg";
import Atom from "../assets/atom.svg";
import monitorScreen from "../assets/coding.svg";

export const ListOfLangs = () => {
  return (
    <div className="ListOfLangs">
      <div className="listOfLangs__header">
        <h2>We Speak 9 Languages</h2>
      </div>
      <div className="listOfLangs__mainText">
        <p>
          There's nothing more frustrating than opening an interview prep book,
          only to find a bunch of solutions in a programming language that you
          don't know. That's why all of our questions come with complete written
          solutions in 9 popular languages.
        </p>
      </div>

      <div className="listOfLangs__programmingLangs">
        <div className="Java">
          <img className="programming__langsIcons" src={Android} alt="" />
          <h4 className="programming__langLanguage">
            {" "}
            <span className="programming__langsName">Java</span>, for all you
            Androiders
          </h4>
        </div>
        <div className="python">
          <img className="programming__langsIcons" src={Atom} alt="" />
          <h4 className="programming__langLanguage">
            <span className="programming__langsName">Python</span>, for all data
            scientits
          </h4>
        </div>
        <div className="Typescript">
          <img className="programming__langsIcons" src={monitorScreen} alt="" />
          <h4 className="programming__langLanguage">
            <span className="programming__langsName">TypeScript</span>, For All
            web developers
          </h4>
        </div>
      </div>
    </div>
  );
};
