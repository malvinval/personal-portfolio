import Navbar from "../components/Navbar";
import TimelineItem from "../components/TimelineItem";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import React from "react";
import AboutPageTitleAndDesc from "../components/AboutPageTitleAndDesc";
import SkillsItem from "../components/SkillsItem";
import { SiHtml5, SiJavascript, SiBootstrap, SiTailwindcss, SiPhp, SiLaravel, SiGithub, SiCss3, SiReact, SiVuedotjs, SiMysql, SiNextdotjs } from "react-icons/si";

const About = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const element = (
        <>
            <Navbar />

            <div className="w-full flex justify-center bg-white">
                <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="font-poppins mt-20 bg-white pt-16 w-3/4 h-3/4">
                    <div className="bg-white flex flex-col lg:flex-row">
                        <AboutPageTitleAndDesc title="Educations Timeline" desc="
                        I did not get much knowledge related to software development from my school. My intention to be a programmer has actually emerged since I was in middle school, but I only have gotten into it when I was in high school. I am currently a computer science student at University of Singaperbangsa Karawang with ambitions to graduate with a bachelor's degree in computer science.                        
                        " />
                        <div className="w-full lg:w-1/2 flex lg:justify-center items-center py-20">
                            <div>
                                <ol className="relative border-l border-gray-200 w-full">                  
                                    <TimelineItem title="Universitas Singaperbangsa Karawang" link="https://www.unsika.ac.id" time="2021 - Present" description="Bachelor of Computer Science" current />
                                    <TimelineItem title="SMAN 5 Tambun Selatan" link="http://sman5tamsel.sch.id/" time="2018 - 2021" description="Majoring in Science" />
                                    <TimelineItem title="SMP Santa Lusia" link="https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/50E14006-2DF5-E011-9E3D-89479A48376B" time="2015 - 2018" description="3 years of happiness" /> 
                                    <TimelineItem title="SD Santa Lusia" link="https://sdsantalusiabekasi.sch.id/" time="2009 - 2015" description="The troublemaker" />
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col lg:flex-row">
                        <AboutPageTitleAndDesc title="Skills" desc="
                        I am the type of programmer who focuses on learning and mastering only one technology. But in fact, technology trends are always changing very fast so it encourages me to be able to learn many things at the same time. Here are some of the website development technologies that I use the most.
                        "/>
                        
                        <div className="w-full lg:w-1/2 py-20 flex flex-col md:flex-row md:justify-between lg:justify-center">
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