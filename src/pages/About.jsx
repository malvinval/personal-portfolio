import Navbar from "../components/Navbar";
import TimelineItem from "../components/TimelineItem";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";

const About = () => {
    const particlesInit = (main) => {
        loadFull(main);
    };
    const element = (
        <>
            <Navbar />

            <div className="h-screen w-full flex justify-center font-poppins bg-white pt-16">
            <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="bg-white w-3/4 h-3/4 mt-20 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                            <TimelineItem title="Universitas Singaperbangsa Karawang" time="2021 - Present" description="Majoring in Informatics" latest />
                            <TimelineItem title="SMAN 5 Tambun Selatan" time="2018 - 2021" description="Majoring in Science" />
                            <TimelineItem title="SMP Santa Lusia" time="2015 - 2018" description="3 years of happiness" /> 
                            <TimelineItem title="SD Santa Lusia" time="2009 - 2015" description="The troublemaker" />
                        </ol>
                    </div>

                    <div className="w-full lg:w-1/2 py-20 flex flex-col justify-center">
                        
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default About;