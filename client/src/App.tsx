import React, { FC } from "react";
import "./StyleSheet/App.css";
import Header from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { SecondaryContent } from "./Components/SecondaryContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TextEditor } from "./Components/TextEditor";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/editor">
          <TextEditor />
        </Route>
        <Route path="/" exact={true}>
          <Header />
          <MainContent />
          <SecondaryContent />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
