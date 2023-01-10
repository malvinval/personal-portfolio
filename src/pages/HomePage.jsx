import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MalvinValImage from "../img/MalvinVal.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";

const HomePage = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const element = (
        <>
            <Navbar />

            <div className="h-full lg:h-screen w-full flex justify-center font-poppins bg-white pt-16">
                <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="bg-white w-3/4 h-3/4 mt-20 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex justify-center items-center z-30">
                        <img src={MalvinValImage} alt="MalvinVal'sImage" id="profile-image" className="w-full lg:w-3/5 md:w-3/5" />
                    </div>
                    <div className="w-full lg:w-1/2 py-20 flex flex-col justify-center z-30">
                        <div className="text-center lg:text-left">
                            <div className="py-3">
                                <h1 className="text-4xl text-slate-600">Hi, there! I'm a</h1>
                            </div>
                            <div>
                                <h1 className="text-4xl text-black lg:text-7xl font-extrabold">Web Developer</h1>
                            </div>
                        </div>
                        <div className="pt-8 pb-5 text-justify lg:w-3/4">
                            <p className="text-gray-700">I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.</p>
                        </div>
                        <div className="pb-8 text-justify lg:w-3/4">
                            <p className="text-gray-700">For the last 3 years, I have been developing website apps using JavaScript, PHP, Bootstrap Framework, TailwindCSS, Vue.js, React.js, and Laravel.</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <Link to={"/about"} className="group btn bg-#205295 cursor-pointer text-white">
                                Read more about me
                                <span>
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default HomePage;