import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MalvinValImage from "../img/MalvinVal.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AOS from 'aos';
import React from "react";
import "aos/dist/aos.css";

const HomePage = () => {
    React.useEffect(() => {
        AOS.init({
          duration : 1000
        });
    }, []);

    const element = (
        <>
            <Navbar />

            <div className="h-screen w-full flex justify-center font-poppins">
                <div className="bg-white w-3/4 h-3/4 mt-20 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img src={MalvinValImage} alt="" className="w-full lg:w-1/2 md:w-1/2"
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-once="true" />
                    </div>
                    <div className="w-full lg:w-1/2 py-20 flex flex-col justify-center">
                        <div className="text-center lg:text-left">
                            <div className="py-3"
                                    data-aos="fade-down"
                                    data-aos-offset="300"
                                    data-aos-once="true"
                                    data-aos-delay="300">
                                <h1 className="text-4xl text-slate-600">Hi, there! I'm a</h1>
                            </div>
                            <div data-aos="fade-down"
                                 data-aos-offset="300"
                                 data-aos-once="true"
                                 data-aos-delay="600">
                                <h1 className="text-4xl text-black lg:text-7xl font-extrabold">Web Developer</h1>
                            </div>
                        </div>
                        <div className="py-8 text-center lg:text-justify lg:w-3/4"
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-once="true"
                            data-aos-delay="900">
                            <p>For the last 3 years, I have been developing websites using JavaScript, PHP, Bootstrap Framework, TailwindCSS, Vue.js, React.js, and Laravel.</p>
                        </div>
                        <div className="text-center lg:text-left"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-once="true"
                            data-aos-delay="500">
                            <Link to={"/"} smooth="true" duration={500} className="group btn bg-#205295 cursor-pointer">
                                Read more about me
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default HomePage;