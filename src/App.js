import './App.css';

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App text-gray-400 bg-gray-900 body-font scroll-smooth">
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  );
}

export default App;
