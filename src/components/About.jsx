import {HashLink as Link} from "react-router-hash-link";

export default function About() {
    return (
        <section id="about">
            <div className=" justify-end container mx-auto flex px-10 sm:pt-10 lg:pt-0 md:flex-row flex-col items-center text-center ">
                <div className={"flex-row"}>
                    <img alt={"logo"} src={"./assets/jwhLogo.svg"}/>
                </div>
                <div className=" about-info w-1/2  flex flex-col  md:text-center mb-16 md:mb-0 items-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Greetings! This is a website
                    </h1>
                    <h1 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-white">
                        Created by Justin W. Hubbell
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Full Stack Software Engineer with a passion for creating new things, making Music and enjoying the Outdoors
                        <br/>
                        Interested in any and all things Tech, getting the canoe on the water whenever possible
                        and listening to live music.
                        <br/>
                        Let's link up for a Jam Session, I play percussion, or connect on Discord for some gaming.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="inline-flex text-gray-400 bg-skills border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Cool Stuff
                        </a>
                        <Link to={"/contact#contact"} className={" ml-4 inline-flex text-white bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"}>Contact Me</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}