import React from "react";
import Particles from "react-tsparticles";
import Navbar from "../components/Navbar";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import ExperienceItem from "../components/ExperienceItem";
import { BsStars } from "react-icons/bs";

const Experiences = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const element = (
        <>
            <Navbar />

            <div className="w-full h-screen flex justify-center items-center font-poppins bg-white">
                <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="w-full lg:w-2/5 flex flex-col justify-center items-center z-30">
                    <div className="z-30 w-full md:w-3/4 lg:w-full relative">
                        <BsStars className="text-7xl absolute right-28 md:right-48 lg:right-40 -top-6 text-pink-300 text-opacity-100" />
                        <h1 className="absolute left-0 right-0 text-center text-3xl lg:text-4xl font-extrabold text-gray-800 underline decoration-pink-500">Relevant Experience</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-24 w-11/12 space-y-4 z-30">
                        <ExperienceItem title="Laboratorium Assistant" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                        <ExperienceItem title="Frontend Web Developer Intern" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                        <ExperienceItem title="Apprentice Teacher" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                        <ExperienceItem title="Repository Contributor" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default Experiences;