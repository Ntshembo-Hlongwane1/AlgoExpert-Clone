import React, { FC } from "react";
import "./StyleSheet/App.css";
import Header from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SecondaryContent } from "./Components/SecondaryContent";
import { TextEditor } from "./Components/TextEditor";

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/text-editor" exact={true}>
          <TextEditor />
        </Route>
        <Route path="/" exact={true}>
          <MainContent />
          <SecondaryContent />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
