import React from "react";
import Navbar from "../components/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import { useForm } from '@formspree/react';
import SuccessAlertModal from "../components/SuccessAlertModal";

const Projects = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const [state, handleSubmit] = useForm("meqwrgjy");

    if(state.succeeded) {
        const lastSubmittedTimestamp = localStorage.getItem('lastSubmittedTimestamp');
        const currentTimestamp = Date.now();

        if (!lastSubmittedTimestamp || currentTimestamp - lastSubmittedTimestamp > 300000) {
            localStorage.setItem('lastSubmittedTimestamp', currentTimestamp);
        }
    }

    const element = (
        <>
            <Navbar />

            <div className="w-full h-screen bg-white">
                <div className="w-full flex justify-center items-center font-poppins pt-16">
                    <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                    
                    <section class="bg-white z-30">
                        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded-lg mt-10 lg:mt-20">
                            <h2 class="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#01aae7] to-[#0974f1]">Give me a feedback !</h2>
                            <p class="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">I would love to receive any feedbacks from you. Send it <span className="underline">anonymously</span> via the form below!</p>
                            <SuccessAlertModal isMessageSent={state.succeeded ? "true":""} title="Your message successfully sent!" />
                            <form onSubmit={handleSubmit} class="space-y-8">
                                <div>
                                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" id="subject" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how I can help you" required />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-700">Your message</label>
                                    <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                                </div>
                                <button type="submit" disabled={state.submitting} class={`${!localStorage.getItem('lastSubmittedTimestamp') || Date.now() - localStorage.getItem('lastSubmittedTimestamp') > 300000 ? "":"hidden"} btn btn-primary py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>Send message</button>
                                <p className={`${!localStorage.getItem('lastSubmittedTimestamp') || Date.now() - localStorage.getItem('lastSubmittedTimestamp') > 300000 ? "hidden":""} text-sm font-medium text-red-700`}>
                                    You can send another message after 5 minutes.
                                </p>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

        </>
    );

    return element;
}

export default Projects;