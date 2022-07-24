// import Logo from "./Logo";


export default function About() {
    return (
        <section id="about">
            <div className=" justify-end container mx-auto flex px-10 sm:pr-5 py-20 md:flex-row flex-col items-center text-center ">
                {/*<Logo />*/}
                <div className=" about-info w-1/2  flex flex-col  md:text-center mb-16 md:mb-0 items-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, My name is Justin
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a Full Stack Software Engineer with a passion for Music and the Outdoors.
                        <br/>
                        I am interested in any and all things Tech.
                        <br/>
                        Let's link up for a Jam Session or connect on Discord for some gaming, my GamerTag is Hubbsy!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-skills border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Personal Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}