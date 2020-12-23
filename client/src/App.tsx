import React, { FC } from "react";
import "./StyleSheet/App.css";
import Header from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { Cube } from "./Components/Cube";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Cube />
    </div>
  );
};

export default App;
