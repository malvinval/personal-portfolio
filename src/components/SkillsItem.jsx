const SkillsItem = (props) => {
    const element = (
        <li className="flex items-center mb-10 ml-6">
            <span className={`${props.textColor} absolute flex items-center justify-center w-6 h-6 rounded-full -left-3`}>
                {props.logo}
            </span>
            <h3 className="text-lg font-semibold text-gray-900">{props.title}</h3>
        </li>
    );

    return element;
}

export default SkillsItem;