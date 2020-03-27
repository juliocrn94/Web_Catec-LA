import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import componentes
import Hero from "./components/Hero"


function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
