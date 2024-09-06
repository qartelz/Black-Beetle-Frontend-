import { useState } from "react";

export const Select = ({ options, className, onSelect, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div {...props} className={`relative min-w-20 ${className}`}>
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md flex justify-between items-center"
            >
                <span>{selectedOption}</span>
                <svg
                    className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute z-10 w-full bg-gray-600 border border-gray-700 rounded-md mt-1 shadow-lg">
                    <ul className="text-white">
                        {options.map((o) => <li onClick={() => handleOptionClick(o)} className="p-2" >
                            <div className="px-4 py-2 hover:bg-yellow-600 cursor-pointer rounded">
                                {o}
                            </div>
                        </li>)}
                    </ul>
                </div>
            )}
        </div>
    );
};
