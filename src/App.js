import './App.css';

import React, {useEffect, useState, useRef} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Logo from "./components/Logo";

function App() {
    const [firstLoad, setFirstLoadStatus] = useState(true);
    const appRef = useRef(null);

    return (
        <>
            <Logo  className={firstLoad ? "" : "hidden"} setFirstLoadStatus={setFirstLoadStatus} appRef={appRef}/>
            <div ref={appRef} className={firstLoad ? "hidden" : "App text-main bg-background body-font items-center justify-center scroll-smooth"}>
                <Navbar/>
                {/*<Logo setFirstLoadStatus={setFirstLoadStatus}/>*/}
                <About/>
                <Projects/>
                <Skills/>
                <Contact/>
            </div>
        </>

      );
}

export default App;
