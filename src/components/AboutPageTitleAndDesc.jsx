import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React from "react";

const AboutPageTitleAndDesc = (props) => {
    const element = (
        <div className="w-full flex flex-col justify-center lg:w-1/2 z-30">
            <div className="flex justify-center items-center py-5">
                <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01aae7] to-[#0974f1]">{props.title}</h1>
                <MdOutlineKeyboardArrowRight className="hidden lg:block text-4xl text-blue-700 font-bold" />
            </div>
            <div className="w-full lg:w-3/4 mx-auto text-justify">
                <p className="text-gray-500 font-medium leading-8">{props.desc}</p>
            </div>
        </div>
    );

    return element;
}

export default AboutPageTitleAndDesc;