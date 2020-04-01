import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import componentes
import Nav from "./components/Nav"
import Routes from "./components/Routes"


function App() {
  return (
    <div className="App">
      <Nav class="hero-nav"/>

      <Routes />
    </div>
  );
}

export default App;
