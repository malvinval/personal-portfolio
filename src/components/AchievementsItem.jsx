const AchievementsItem = (props) => {
    const element = (
        <div class="w-full max-w-sm lg:w-72 z-30 mx-0 mb-5 md:mx-5 my-2 bg-white border flex flex-col justify-center border-gray-200 rounded-lg shadow">
            <div className="h-1/2 flex items-center justify-center">
                <img class="p-8 rounded-t-lg" src={props.logo} alt="" />
            </div>
            <div class="px-5 pb-5">
                <h5 class="text-lg tracking-tight text-gray-900">{props.title}</h5>
            
                <div class="flex items-center mt-2.5 mb-5">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-2 rounded dark:bg-blue-200 dark:text-blue-800">{props.issuer}</span>
                </div>
                <div class="flex items-center justify-between cursor-pointer">
                    <a href={props.link} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Certificates</a>
                </div>
            </div>
        </div>
    );

    return element;
};

export default AchievementsItem;