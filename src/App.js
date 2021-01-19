import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import JumboTron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <JumboTron />
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/saved" component= { Saved } />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
