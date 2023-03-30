import ErrorAlertModal from "../components/ErrorAlertModal";
import Navbar from "../components/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";

const ContactsPageErrorElement = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const element = (
        <>
            <Navbar />

            <div className="w-full h-screen bg-white">
                <div className="w-full flex justify-center items-center font-poppins pt-16">
                    <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                    <div className="w-full lg:w-2/5 flex flex-col justify-center items-center z-30 mt-20 lg:mt-36 mx-5">
                        <ErrorAlertModal title="Please enable Cookies and reload this page!" />
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default ContactsPageErrorElement;