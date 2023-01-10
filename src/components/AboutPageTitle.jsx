import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React from "react";

const AboutPageTitle = (props) => {
    const element = (
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <h1 className="text-4xl text-slate-600 text-center font-bold"
                data-aos="fade-right"
                data-aos-once="true">{props.title}</h1>
            <MdOutlineKeyboardArrowRight className="hidden lg:block text-4xl text-slate-600 font-bold"
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-delay="200" />
        </div>
    );

    return element;
}

export default AboutPageTitle;