const SkillsItem = (props) => {
    const element = (
        <li class="flex items-center space-x-3 mb-10 ml-6">
            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <h3 className="text-lg font-semibold text-gray-900">{props.title}</h3>
        </li>
    );

    return element;
}

export default SkillsItem;