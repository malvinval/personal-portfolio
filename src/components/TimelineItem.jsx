import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ logo, title, desc, date, isLast }) => {
    return (
        <motion.div 
            className="flex relative pb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {!isLast && (
                <div className="h-full w-0.5 absolute bg-gray-300 top-4 left-5" />
            )}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
                <img 
                    src={logo} 
                    alt={title}
                    className="w-8 h-8 rounded-full object-contain"
                />
            </div>
            <div className="flex-grow pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:ml-4 mt-1 sm:mt-0">
                        {date}
                    </span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};

export default TimelineItem;
