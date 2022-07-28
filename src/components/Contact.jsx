import React, {useState, useEffect, useRef} from "react";
import { ClipboardIcon} from "@heroicons/react/solid";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //  Encode data for Netlify url request
    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (

        <main id="contact" className="relative">
            <div className="flex flex-col w-full px-5 py-20 mx-auto text-center">
                <ClipboardIcon className="mx-auto inline-block w-10 mb-4" />
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Let's work together
                </h2>
            </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="group lg:w-1/2 md:w-1/2 bg-gray-900 overflow-hidden sm:mr-10 pt-5 px-10 pb-10 flex items-start justify-center relative">
                    <img className={"group-hover:invisible w-full sm:w-full lg:w-1/2 rounded-full border-8 relative"} alt={"Me as myself"} src="./assets/profile-pic.png"/>
                    <img className={"invisible group-hover:visible w-full sm:w-full lg:w-1/2 rounded-full border-8 absolute"} alt={"Me and Layla"} src="./assets/meAndLayla.png"/>
                </div>
                <form
                    netlify={"true"}
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-center">
                    <p className="leading-relaxed mb-5 pb-10">
                        If you are looking for new talent or need a hard working Software Engineer, Let's connect! I am always
                        interested in collaboration on new and exciting projects or just having a chat.
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
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}

