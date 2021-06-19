import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Portfolio from "./screens/Portfolio";

function App() {
  return (
    <div className="App" styles={{ height: "500px", overflowY: "scroll" }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Header />
            <div style={{ paddingTop: 70 }} />
            <Home />
          </Route>
          <Route path="/blog">
            <Header />
            <div style={{ paddingTop: 70 }} />
            <Blog />
          </Route>
          <Route path="/portfolio">
            <Header />
            <div style={{ paddingTop: 70 }} />
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
