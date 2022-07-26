import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";

import Logo from "./Logo";
import Home from "./Home";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

export default function Layout() {
    const [firstLoad, setFirstLoadStatus] = useState(true);

    return (
        <>
            <CSSTransition in={firstLoad} timeout={1000} classNames={"logo"} unmountOnExit>
                <Logo setFirstLoadStatus={setFirstLoadStatus}/>
            </CSSTransition>

            <CSSTransition in={!firstLoad} timeout={1000} classNames={"logo"} mountOnEnter unmountOnExit>
                <div className={"App text-main bg-background body-font items-center justify-center scroll-smooth"}>
                    <Navbar />
                    <Outlet />
                </div>
            </CSSTransition>

        </>
    );
}