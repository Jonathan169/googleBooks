import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/search";
import Saved from "./Components/saved";

class App extends React.Component {
  render() { 
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    )}
}

export default App;
