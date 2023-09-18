import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExperienceItem = (props) => {
    const [isDetailed, setIsDetailed] = React.useState(false);

    const element = (
        <div tabIndex={0} className="collapse"> 
            <div onClick={() => {setIsDetailed(!isDetailed)}} className="collapse-title rounded-lg item-experience flex font-semibold cursor-pointer justify-between items-center text-left p-4
            bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 shadow-#0974f1">
                <div className="flex items-center">
                    <img src={props.logo} className={`w-10 h-10 mr-3`} alt="" />
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#01aae7] to-[#0974f1]">{props.title}</p>
                </div>
                <IoIosArrowDown />
            </div>
            <div className="collapse-content rounded-md mt-2 text-justify bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50"> 
                <p className="py-5 text-base text-gray-500 font-medium leading-8">{props.desc}</p>
            </div>
        </div>
    );

    return element;
}

export default ExperienceItem;