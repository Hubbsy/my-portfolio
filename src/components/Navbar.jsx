import { MailIcon } from "@heroicons/react/solid";
import React from "react";
import {HashLink as Link} from "react-router-hash-link";

export default function Navbar() {

    return (
        <header className="bg-navbar border-0 hidden sm:block md:sticky top-0 z-20">
            <div className="container headerNav text-navText mx-auto flex flex-wrap sm:font-small md:p-3 flex-row items-center">
                <div className="title-font font-medium md:mb-0 ">
                    <Link to={"/#about"} className="ml-3 mr-3 text-xl hover:text-main">Justin W. Hubbell</Link>
                </div>
                <nav className=" font-medium md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link to={"/#projects"} className="mr-5 hover:text-main">Past Work</Link>
                    <Link to={'/#skills'} className="mr-5 hover:text-main">Skills</Link>
                </nav>
                <img className="w-4 h-4 ml-3" alt={"gaming"} src={"./assets/gamepad.svg"}/>
                <nav className={"font-medium pr-5"}>
                    <Link to={"/gaming"}  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-main rounded text-center">Gaming</Link>
                </nav>
                <MailIcon className="w-4 h-4 ml-3" />
                <nav className={"font-medium"}>
                    <Link to={"/contact"}  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-main rounded text-center">Contact</Link>
                </nav>

            </div>
        </header>
    );
}