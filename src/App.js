import './App.css';

import React, {useState, useRef} from "react";
import { CSSTransition } from "react-transition-group";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Logo from "./components/Logo";

function App() {
    const [firstLoad, setFirstLoadStatus] = useState(true);

    return (
        <>
            <CSSTransition in={firstLoad} timeout={1000} classNames={"logo"} unmountOnExit>
                <Logo setFirstLoadStatus={setFirstLoadStatus}/>
            </CSSTransition>

            <CSSTransition in={!firstLoad} timeout={1000} classNames={"logo"} mountOnEnter unmountOnExit>
                <div className={"App text-main bg-background body-font items-center justify-center scroll-smooth"}>
                    <Navbar/>
                    <About/>
                    <Projects/>
                    <Skills/>
                    <Contact/>
                </div>
            </CSSTransition>
        </>

      );
}

export default App;
