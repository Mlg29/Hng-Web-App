import React from 'react';

import './App.css';
import {HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Mentors from "../src/Pages/Mentors"
import Contacts from "../src/Pages/Contacts"
import Join from "../src/Pages/Join"
import Hng from "../src/Pages/Hng6"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/hng" component={Hng} />
            <Route exact path="/mentors" component={Mentors} />
            <Route exact path="/contact" component={Contacts} />
            <Route exact path="/join" component={Join} />
        </Switch>   
      </Router>
    </div>
  );
}



export default App;
