const AchievementsItem = (props) => {
    const element = (
        <div className="w-full h-full z-30 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 flex items-center justify-center p-4">
                <img 
                    className="max-h-full max-w-full object-contain p-4" 
                    src={props.logo} 
                    alt={props.issuer} 
                    loading="lazy"
                />
            </div>
            <div className="p-5 flex flex-col h-48">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {props.title}
                </h5>
            
                <div className="flex items-center mt-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium px-2.5 py-1 rounded">
                        {props.issuer}
                    </span>
                </div>
                <div className="mt-auto">
                    <a 
                        href={props.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
                    >
                        View Certificates
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );

    return element;
};

export default AchievementsItem;