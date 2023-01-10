const SkillsItem = (props) => {
    const element = (
        <li class="flex items-center mb-10 ml-6">
            <span className={`${props.textColor} absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white`}>
                {props.logo}
            </span>
            <h3 className="text-lg font-semibold text-gray-900">{props.title}</h3>
        </li>
    );

    return element;
}

export default SkillsItem;