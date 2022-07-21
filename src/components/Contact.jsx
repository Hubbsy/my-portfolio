import React from "react";
import { ClipboardIcon} from "@heroicons/react/solid";
import {CodeIcon} from "@heroicons/react/solid";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="flex flex-col w-full px-5 py-20 mx-auto">
                <ClipboardIcon className="mx-auto inline-block w-10 mb-4" />
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Let's work together
                </h2>
            </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-1/2 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 pt-5 px-10 pb-10 flex items-end justify-center relative">
                    <img alt={"Hire me"} src="./assets/work.svg"/>
                </div>
                <form
                    netlify
                    name="contact"
                    className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <p className="leading-relaxed mb-5 pb-10">
                        If you are looking for new talent or need a hard working Software Engineer, Let's connect!  Otherwise I am always
                        interested in possible collaboration on new and exciting projects.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

