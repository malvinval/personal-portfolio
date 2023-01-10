import "aos/dist/aos.css";
import React from "react";
import {IoMdSchool} from "react-icons/io";
import {FaSchool} from "react-icons/fa";

const TimelineItem = (props) => {
    const educationIcon = props.current ? <FaSchool className="text-blue-600 w-4 h-4" /> : <IoMdSchool className="text-blue-600 w-5 h-5" />;
    
    const element = (
        <li className="timeline-item-list mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
                {educationIcon}
            </span>

            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay={props.aos_delay}>{props.title} <span className={`${props.current ? "block" : "hidden"} bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3`}>Recent</span></h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.time}</time>
            <p className="mb-4 text-base font-normal text-gray-500">{props.description}</p>
        </li>
    );

    return element;
}

export default TimelineItem;