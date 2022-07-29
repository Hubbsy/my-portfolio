
import { BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import React from "react";
import { skills } from "../projectData/skills";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-20 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4 text-navText" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-main mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-navText leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        I am proficient in the skills listed below.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-skills rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-footer w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-navText">
                  {skill}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
