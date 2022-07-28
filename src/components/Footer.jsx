import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {HashLink as Link} from "react-router-hash-link";

export default function Navbar() {

    return (
        <footer className=" bg-footer z-10 fixed bottom-0 left-0 right-0">
            <div className="footerNav container mx-auto flex flex-wrap sm:font-small p-2 flex-row items-center justify-end">
                <a
                    href="https://discord.gg/a7FTaZP9rS"
                    target="_blank"
                    rel="noreferrer"
                    className={"px-5"}
                >
                    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" /> Discord
                </a>
                <a
                    href="https://linkedin.com/in/justin-hubbell"
                    target="_blank"
                    rel="noreferrer"
                    className={"px-5"}
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> LinkedIn
                </a>
                <a
                    href="https://github.com/Hubbsy"
                    target="_blank"
                    rel="noreferrer"
                    className={"px-5"}
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> GitHub
                </a>
            </div>
        </footer>
    );
}