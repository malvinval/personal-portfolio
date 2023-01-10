import Navbar from "../components/Navbar";
import TimelineItem from "../components/TimelineItem";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import React from "react";
import AboutPageTitle from "../components/AboutPageTitle";
import SkillsItem from "../components/SkillsItem";
import { SiHtml5, SiJavascript, SiBootstrap, SiTailwindcss, SiPhp, SiLaravel, SiGithub, SiCss3, SiReact, SiVuedotjs, SiMysql, SiNextdotjs } from "react-icons/si";

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
                                <TimelineItem title="Universitas Singaperbangsa Karawang" time="2021 - Present" description="Bachelor of Computer Science" current />
                                <TimelineItem title="SMAN 5 Tambun Selatan" time="2018 - 2021" description="Majoring in Science" />
                                <TimelineItem title="SMP Santa Lusia" time="2015 - 2018" description="3 years of happiness" /> 
                                <TimelineItem title="SD Santa Lusia" time="2009 - 2015" description="The troublemaker" />
                            </ol>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col lg:flex-row">
                        <AboutPageTitle title="Skills" />
                        <div className="w-full lg:w-1/2 py-20 flex flex-col md:flex-row md:justify-between lg:justify-start">
                            <div>
                                <ol className="relative w-full">
                                    <SkillsItem title="HTML5" logo={<SiHtml5 />} textColor="text-red-500" />
                                    <SkillsItem title="CSS3" logo={<SiCss3 />} textColor="text-blue-500" />
                                    <SkillsItem title="JavaScript ES6" logo={<SiJavascript />} textColor="text-yellow-500" />
                                    <SkillsItem title="BootstrapCSS" logo={<SiBootstrap />} textColor="text-indigo-500" />
                                    <SkillsItem title="TailwindCSS" logo={<SiTailwindcss />} textColor="text-blue-500" />
                                    <SkillsItem title="PHP" logo={<SiPhp />} textColor="text-purple-500" />
                                </ol>
                            </div>
                            <div className="lg:ml-14">
                                <ol className="relative w-full">
                                    <SkillsItem title="ReactJS" logo={<SiReact />} textColor="text-blue-500" />
                                    <SkillsItem title="VueJS" logo={<SiVuedotjs />} textColor="text-green-500" />
                                    <SkillsItem title="NextJS" logo={<SiNextdotjs />} textColor="text-black-500" />
                                    <SkillsItem title="Laravel" logo={<SiLaravel />} textColor="text-red-500" />
                                    <SkillsItem title="Git / Github" logo={<SiGithub />} textColor="text-black-500" />
                                    <SkillsItem title="SQL & MySQL DBMS" logo={<SiMysql />} textColor="text-blue-900" />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default About;