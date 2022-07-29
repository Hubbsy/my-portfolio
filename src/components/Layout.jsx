import React, {useState, useRef} from "react";
import {CSSTransition} from "react-transition-group";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer"
import {Outlet} from "react-router-dom";

export default function Layout() {
    const [firstLoad, setFirstLoadStatus] = useState(true);
    const logoTransitionRef = useRef(null);

    return (
        <>
            <CSSTransition ref={logoTransitionRef} in={firstLoad} timeout={1000} classNames={"logo"} unmountOnExit>
                <div ref={logoTransitionRef}>
                    <Logo setFirstLoadStatus={setFirstLoadStatus}/>
                </div>

            </CSSTransition>

            <CSSTransition in={!firstLoad} timeout={1000} classNames={"logo"} mountOnEnter unmountOnExit>
                <div className={"App text-main bg-background body-font items-center justify-center scroll-smooth"}>
                    <Navbar />
                    <Footer />
                    <Outlet />
                </div>
            </CSSTransition>
        </>
    );
}