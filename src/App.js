import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
