import AOS from 'aos';
import "aos/dist/aos.css";
import React from "react";

const TimelineItem = (props) => {
    React.useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, [])
    
    
    const element = (
        <li className="timeline-item-list mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>

            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay={props.aos_delay}>{props.title} <span className={`${props.latest ? "block" : "hidden"} bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3`}>Latest</span></h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.time}</time>
            <p className="mb-4 text-base font-normal text-gray-500">{props.description}</p>
        </li>
    );

    return element;
}

export default TimelineItem;