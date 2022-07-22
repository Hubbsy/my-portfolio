import './App.css';

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App text-main bg-background body-font scroll-smooth">
        <Navbar/>
        {/*<Logo/>*/}
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  );
}

export default App;
