import React, {useState, useEffect, useRef} from "react";
import { DesktopComputerIcon} from "@heroicons/react/solid";

export default function Gaming() {

    return (

        <main id="gaming" className="relative">
            <div className="flex flex-col w-full px-5 py-20 mx-auto text-center">
                <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font ">
                    Build - Destroy - Laugh
                    <br/>
                </h2>
                <h2 className={"sm:text-2xl text-1xl"}>
                    These are The Dead Rabbitz
                </h2>
            </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center" >
                <div className="group lg:w-1/2 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 px-10 pb-10 flex flex-col items-center justify-center relative">
                    <img className={"group-hover:hidden w-full sm:w-full lg:w-1/2 rounded-full border-8"} alt={"Whispy bearded elf"} src="./assets/gamingProfile.png"/>
                    <img className={"hidden group-hover:flex w-full sm:w-full lg:w-1/2 rounded-full border-8"} alt={"The Krew"} src="./assets/rabbitCorp.png"/>
                </div>

                <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-center">
                    <p className=" mb-5 ">
                        Join us! Dead Rabbitz, a group of PC gamers, custom rig enthusiasts and all around nerds.  If you are looking for
                        a good group of people to game with, look no further.  Click the Discord link to wreak havoc in the digital realm, make some friends and have a few laughs!
                    </p>
                    <img className={"w-full rounded-full"} alt={"Dead Rabbitz"} src="./assets/DeadRabbits.jpg"/>
                </div>

            </div>
        </main>
    );
}

