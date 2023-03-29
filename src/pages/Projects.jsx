import Navbar from "../components/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";

const Projects = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const element = (
        <>
            <Navbar />

            <div className="w-full flex justify-center bg-white">
                <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
            </div>
        </>
    );

    return element;
}

export default Projects;