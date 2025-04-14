import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import OptimizedMalvinValImage from "../img/optimized/MalvinVal.png";
import OptimizedMalvinValWebP from "../img/optimized/MalvinVal.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import SEO from "../components/SEO";

const HomePage = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const element = (
        <>
            <SEO title="Home" description="Welcome to my portfolio. I'm Malvin Valerian, a web developer." />
            <Navbar />
            <div className="w-full min-h-screen bg-white relative overflow-hidden">
                <div className="w-full flex justify-center items-center font-poppins bg-white pt-16 px-4 sm:px-8 relative">
                    <motion.div 
                        className="absolute inset-0"
                        style={{
                            y: useTransform(useScroll().scrollY, [0, 300], [0, 100])
                        }}
                    >
                        <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                    </motion.div>
                    <div className="bg-white w-full max-w-6xl py-12 md:py-20 flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 flex justify-center items-center z-30 mb-10 lg:mb-0">
                            <picture>
                                <source srcSet={OptimizedMalvinValWebP} type="image/webp" />
                                <motion.img 
                                    src={OptimizedMalvinValImage} 
                                    alt="MalvinVal'sImage" 
                                    className="w-4/5 sm:w-3/5 lg:w-4/5 rounded-full shadow-2xl border-4 border-blue-100 transform hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                />
                            </picture>
                        </div>
                        <motion.div 
                            className="w-full lg:w-1/2 flex flex-col justify-center z-30 px-4 sm:px-8"
                            style={{
                                y: useTransform(useScroll().scrollY, [0, 300], [0, -30])
                            }}
                        >
                            <div className="text-center lg:text-left">
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl md:text-4xl text-gray-800 font-bold mb-2"
                                >
                                    Hi, I'm Malvin Valerian
                                </motion.h1>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-8"
                                >
                                    Web Developer
                                </motion.h2>
                            </div>
                            <div className="space-y-4 mb-8">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Passionate full-stack developer with 3+ years of experience building modern web applications using JavaScript, React, Vue, and Laravel.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    I specialize in creating responsive, performant, and accessible web experiences with clean, maintainable code.
                                </p>
                            </div>
                            <div className="text-center lg:text-left">
                                <Link 
                                    to={"/about"} 
                                    className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-900"
                                >
                                    View My Work
                                    <MdOutlineKeyboardArrowRight 
                                        size={25} 
                                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default HomePage;