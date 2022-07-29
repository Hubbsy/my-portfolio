import {HashLink as Link} from "react-router-hash-link";

export default function About() {
    return (
        <section id="about">
            <div className="text-navText justify-end container mx-auto flex px-10 sm:pt-10 lg:pt-0 md:flex-row flex-col items-center text-center ">
                <div className={"flex-row"}>
                    <img alt={"logo"} src={"./assets/jwhLogo.svg"}/>
                </div>
                <div className=" about-info w-1/2  flex flex-col  md:text-center mb-16 md:mb-0 items-center">
                    <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-main pb-5">
                        Greetings! This is a website
                    </h1>
                    <h1 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-white">
                        Created by Justin W. Hubbell
                    </h1>
                    <div className="mb-8 leading-relaxed">
                        <h2 className={"w-full pb-5"}>Full Stack Software Engineer</h2>
                        <h2 className={"w-full pb-5"}>A passion for the outdoors and getting the canoe on the water whenever possible</h2>
                        <h2 className={"w-full"}>Let's link up for a Jam Session, I play percussion, or connect on Discord for some gaming</h2>
                    </div>
                    <div className="flex justify-center">
                        <Link to={"/gaming#gaming"} className={" inline-flex text-gray-400 bg-buttonsGaming border-2 border-main py-2 px-6 focus:outline-none hover:bg-buttonsHover hover:text-navText text-buttonText rounded text-lg"}>Gaming</Link>
                        <Link to={"/contact#contact"} className={" ml-4 inline-flex text-white text-buttonText border-2 border-main bg-buttonsContact py-2 px-6 focus:outline-none hover:bg-buttonsHover hover:text-navText rounded text-lg"}>Contact</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}