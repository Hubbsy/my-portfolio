import React, {useState} from "react";
import { ClipboardIcon} from "@heroicons/react/solid";
import {HashLink as Link} from "react-router-hash-link";

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
            <div className={"sm:hidden w-1/4 absolute py-5"}>
                <Link to={"/#about"} className=" text-xl"><img src={"./assets/jwhLogo.svg"} alt={"JWH"}/></Link>
            </div>
            <div className="flex flex-col w-full px-5 pt-20 sm:py-5 mx-auto text-center">
                <ClipboardIcon className="mx-auto inline-block w-10 mb-4 text-navText" />
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Let's work together
                </h2>
            </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="group lg:w-1/2 md:w-1/2 bg-gray-900 overflow-hidden sm:mr-10 pt-5 px-10 pb-10 flex items-center justify-center relative">
                    <img className={"group-hover:invisible w-full sm:w-full lg:w-1/2 rounded-full border-8 border-footer relative"} alt={"Me as myself"} src="./assets/profile-pic.png"/>
                    <img className={"invisible group-hover:visible w-full sm:w-full lg:w-1/2 rounded-full border-8 border-footer absolute"} alt={"Me and Layla"} src="./assets/meAndLayla.png"/>
                </div>
                <form
                    netlify={"true"}
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full pb-5 md:py-8 mt-8 md:mt-0 text-center">
                    <p className="leading-relaxed mb-5 pb-10 text-navText">
                        If you are looking for new talent or need a hard working Software Engineer based in Austin TX. Let's connect! I am always
                        interested in collaboration on new and exciting projects or just having a chat.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-main">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-main rounded border border-footer focus:border-navBottom focus:ring-2 focus:ring-navBottom text-base outline-none text-navText py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-main">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-main rounded border border-footer focus:border-navBottom focus:ring-2 focus:ring-navBottom text-navText outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-main">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-main rounded border border-footer focus:border-navBottom focus:ring-2 focus:ring-navBottom h-32 outline-none text-navText py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-main bg-buttons border border-1 border-main py-2 px-6 hover:border-navBottom hover:bg-footer rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}

