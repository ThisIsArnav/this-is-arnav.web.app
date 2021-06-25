import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";

function App() {
  return (
    <div className="App" styles={{ height: "500px", overflowY: "scroll" }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <div style={{ paddingTop: 20 }} />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
