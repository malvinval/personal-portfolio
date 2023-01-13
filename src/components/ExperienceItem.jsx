import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExperienceItem = (props) => {
    const [isDetailed, setIsDetailed] = React.useState(false);

    const element = (
        <div tabIndex={0} className="collapse"> 
            <div onClick={() => {setIsDetailed(!isDetailed)}} className="collapse-title rounded-lg item-experience flex font-semibold cursor-pointer justify-between items-center text-left p-4
            bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 shadow-#0974f1">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#01aae7] to-[#0974f1]">{props.title}</p>
                <IoIosArrowDown />
            </div>
            <div className="collapse-content rounded-md mt-2 text-left bg-gray-500"> 
                <p className="py-5 text-white">{props.desc}</p>
            </div>
        </div>
    );

    return element;
}

export default ExperienceItem;