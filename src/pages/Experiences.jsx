import React from "react";
import Particles from "react-tsparticles";
import Navbar from "../components/Navbar";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import ExperienceItem from "../components/ExperienceItem";

const Experiences = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const element = (
        <>
            <Navbar />

            <div className="h-full lg:h-screen w-full flex justify-center items-center font-poppins bg-white pt-16">
                <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="w-full lg:w-2/5 flex flex-col justify-center items-center pt-16 lg:pt-0 z-30">
                    <div className="z-30 w-full">
                        <h1 className="text-center text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#01aae7] to-[#0974f1]">Relevant Experience</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 w-11/12 lg:w-3/4 space-y-4 z-30">
                        <ExperienceItem title="Laboratorium Assistant" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                        <ExperienceItem title="Frontend Web Developer Intern" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                        <ExperienceItem title="Teacher" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                        <ExperienceItem title="Contributor" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aperiam tenetur explicabo alias autem esse non aut eaque minus vitae, doloribus voluptatibus magnam aliquam perspiciatis illum illo perferendis ea velit, libero accusamus voluptates? Error incidunt nemo perspiciatis vero deleniti repellendus odio sit nostrum culpa, aliquid eius quis optio unde!" />
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default Experiences;