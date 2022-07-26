import {CSSTransition} from "react-transition-group";
import React, {useState} from "react";
import {Outlet} from "react-router-dom";

import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";


export default function Home() {
    return (
      <main>
          <About />
          <Projects />
          <Skills />
      </main>
    );
}