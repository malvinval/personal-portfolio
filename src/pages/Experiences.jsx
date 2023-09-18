import React from "react";
import Particles from "react-tsparticles";
import Navbar from "../components/Navbar";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import ExperienceItem from "../components/ExperienceItem";
import { BsStars } from "react-icons/bs";
import LabKompUnsikaLogo from "../img/labkompunsika.png";
import OuseanLogo from "../img/ousean.png";
import KampusMerdekaLogo from "../img/kampusmerdeka.png";
import BellshadeLogo from "../img/bellshade.png";
import OkoceLogo from "../img/OkoceLogo-2.png";

const Experiences = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const element = (
        <>
            <Navbar />

            <div className="w-full h-screen bg-white">
                <div className="w-full flex justify-center items-center font-poppins pt-16">
                    <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                    <div className="w-full lg:w-2/5 flex flex-col justify-center items-center z-30 mt-20 lg:mt-36">
                        <div className="z-30 w-full md:w-3/4 lg:w-full relative">
                            <BsStars className="text-7xl absolute right-28 md:right-48 lg:right-40 -top-6 text-pink-300 text-opacity-100" />
                            <h1 className="absolute left-0 right-0 text-center text-3xl lg:text-4xl font-extrabold text-gray-800 underline decoration-pink-500">Relevant Experience</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-24 w-11/12 space-y-4 z-30">
                            <ExperienceItem width="10" height="5" logo={OkoceLogo} title="Website and Social Media Developer" desc="From August - December 2023, I have been doing an internship at OK OCE Indonesia as a Website and Social Media developer who focuses on developing website applications and it's security." />
                            <ExperienceItem width="10" height="10" logo={LabKompUnsikaLogo} title="Laboratorium Assistant" desc="Since January 2023, I have been working as a computer laboratory assistant at University of Singaperbangsa Karawang. My main responsibility is to teach material from several courses such as programming algorithms, object-oriented programming, website programming and website frameworks." />
                            <ExperienceItem width="10" height="10" logo={OuseanLogo} title="Web Developer Intern" desc="Since December 2022, I have been doing an internship as a Frontend Web Developer at a startup working in the Education, Health and Human Empowerment sectors, namely PT. Ousean Global Digital. My main responsibility is to build the user interface of the website, and manage the data from the API provided by the backend team." />
                            <ExperienceItem width="10" height="10" logo={KampusMerdekaLogo} title="Apprentice Teacher" desc="Since February 2023, I have been working as a teacher at SDN Jatisampurna IV in the 'Kampus Mengajar' program organized by the Ministry of Education and Culture of the Republic of Indonesia. My main task there is to implement a 'Merdeka' curriculum which focuses on numeracy, literacy, administration, science and technology." />
                            <ExperienceItem width="10" height="10" logo={BellshadeLogo} title="Repository Contributor" desc="I am one of the contributors to an IT community, namely Bellshade. The community is under the auspices of Web Programming UNPAS which is a source for learning programming in Indonesia. I wrote a lot of programming material there, including HTML & CSS, PHP, SQL, Java, C++, and Javascript." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default Experiences;