import Navbar from "../components/Navbar";
import TimelineItem from "../components/TimelineItem";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AOS from 'aos';
import "aos/dist/aos.css";
import React from "react";

const About = () => {
    React.useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const element = (
        <>
            <Navbar />

            <div className="h-full w-full flex justify-center font-poppins bg-white pt-16">
            <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="bg-white w-3/4 h-3/4 mt-20 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <h1 className="text-4xl text-slate-600 text-center font-bold"
                            data-aos="fade-right"
                            data-aos-once="true">Educations Timeline</h1>
                        <MdOutlineKeyboardArrowRight className="hidden lg:block text-4xl text-slate-600 font-bold"
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-delay="200" />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center items-center py-20">
                    <ol className="relative border-l border-gray-200">                  
                        <TimelineItem aos_delay="300" title="Universitas Singaperbangsa Karawang" time="2021 - Present" description="Bachelor of Computer Science" current />
                        <TimelineItem aos_delay="400" title="SMAN 5 Tambun Selatan" time="2018 - 2021" description="Majoring in Science" />
                        <TimelineItem aos_delay="500" title="SMP Santa Lusia" time="2015 - 2018" description="3 years of happiness" /> 
                        <TimelineItem aos_delay="600" title="SD Santa Lusia" time="2009 - 2015" description="The troublemaker" />
                    </ol>
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default About;