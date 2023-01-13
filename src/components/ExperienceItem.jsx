import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExperienceItem = (props) => {
    const [isDetailed, setIsDetailed] = React.useState(false);

    const element = (
        <div tabIndex={0} className="collapse"> 
            <div onClick={() => {setIsDetailed(!isDetailed)}} className="collapse-title item-experience flex justify-between items-center text-left p-4 rounded-md text-white font-semibold cursor-pointer bg-gray-700">
                <p>{props.title}</p>
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