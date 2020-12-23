import React, { FC } from "react";
import { MainContentCards } from "./MainContentCards";
import CheckList from "../assets/check.svg";
import VideoScreen from "../assets/monitor-screen.svg";
import DataStructures from "../assets/atom1.svg";
import CodeScreen from "../assets/coding.svg";
import CodeExecEnv from "../assets/coding(1).svg";
import SpaceTimeAnalysis from "../assets/molecule.svg";
import "../StyleSheet/MainContent.css";

export const MainContent: FC = () => {
  return (
    <div className="MainContent">
      <div className="MainContent__header">
        <h2 className="Header-Text">What is AlgoExpert</h2>
      </div>
      <div className="content">
        <MainContentCards
          Icon={CheckList}
          paragraphText={`Coding interview prep is a numbers game that many candidates lose. We've hand-picked 110 of the best coding interview questions to truly prepare you`}
          HeaderText={`110 Hand-Picked Questions

         `}
        />
        <MainContentCards
          Icon={VideoScreen}
          paragraphText={`Algorithms are tough to learn on paper. Each and every one of our questions is accompanied by a two-part video explanation to maximize learning. That's over 70 hours of content, all at your fingertips.`}
          HeaderText={`70+ Hours Of Video Explanations

          `}
        />
        <MainContentCards
          Icon={DataStructures}
          paragraphText={`Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures.`}
          HeaderText={`Data Structures Crash Course`}
        />
        <MainContentCards
          Icon={CodeScreen}
          paragraphText={`Not everyone speaks the same programming language. We give you solutions to every single question in 9 different languages: JavaScript, Python, Swift, C++, Java, C#, Go, Kotlin, and TypeScript. `}
          HeaderText={`Solutions in 9 Languages`}
        />
        <MainContentCards
          Icon={CodeExecEnv}
          paragraphText={`Coding out solutions to algorithm problems is the best way to practice. Our code-execution environment lets you type out your answers and run them against our test cases right here on the website.`}
          HeaderText={`Code-Execution Environment`}
        />
        <MainContentCards
          Icon={SpaceTimeAnalysis}
          paragraphText={`Understanding how much memory an algorithm uses and how fast it runs is exceedingly important. All of our explanations include a rigorous space-time complexity analysis.`}
          HeaderText={`Space-Time Complexity Analyses

          `}
        />
      </div>
    </div>
  );
};
