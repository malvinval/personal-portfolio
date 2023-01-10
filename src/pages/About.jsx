import Navbar from "../components/Navbar";
import TimelineItem from "../components/TimelineItem";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import React from "react";
import AboutPageTitle from "../components/AboutPageTitle";
import SkillsItem from "../components/SkillsItem";

const About = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const element = (
        <>
            <Navbar />

            <div className="h-full w-full flex justify-center bg-white">
                <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="font-poppins mt-20 bg-white pt-16 w-3/4 h-3/4">
                    <div className="bg-white flex flex-col lg:flex-row">
                        <AboutPageTitle title="Educations Timeline" />
                        <div className="w-full lg:w-1/2 flex justify-center items-center py-20">
                            <ol className="relative border-l border-gray-200 w-full">                  
                                <TimelineItem aos_delay="300" title="Universitas Singaperbangsa Karawang" time="2021 - Present" description="Bachelor of Computer Science" current />
                                <TimelineItem aos_delay="400" title="SMAN 5 Tambun Selatan" time="2018 - 2021" description="Majoring in Science" />
                                <TimelineItem aos_delay="500" title="SMP Santa Lusia" time="2015 - 2018" description="3 years of happiness" /> 
                                <TimelineItem aos_delay="600" title="SD Santa Lusia" time="2009 - 2015" description="The troublemaker" />
                            </ol>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col lg:flex-row">
                        <AboutPageTitle title="Skills" />
                        <div className="w-full lg:w-1/2 flex justify-center items-center py-20">
                            <ol className="relative border-l border-gray-200 w-full">
                                <SkillsItem aos_delay="300" title="HTML5 & CSS3" />
                                <SkillsItem aos_delay="400" title="JavaScript ES6" />
                                <SkillsItem aos_delay="500" title="Bootstrap Framework" />
                                <SkillsItem aos_delay="600" title="TailwindCSS & daisyUI" />
                                <SkillsItem aos_delay="700" title="PHP" />
                                <SkillsItem aos_delay="800" title="Laravel" />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default About;