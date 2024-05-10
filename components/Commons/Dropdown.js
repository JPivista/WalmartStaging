const Dropdown = ({ options }) => {

    

    return (
        <select onChange={handleStateChange}>
            {options.map((option, index) => (
                <option key={index} value={option.}>
                    {option.displayValue}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;