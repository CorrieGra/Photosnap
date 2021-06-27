import './select.css';
import { useEffect, useState } from 'react';

/**
 * 
 * @param { string } firstOption the value of the first option
 * @param { string } secondOption the value of the second option
 * @param { function } callback a function that can be called to retrieve the state of the component
 * @returns 
 */
export default function Select({ firstOption, secondOption, callback  }) {
    const [selectedOption, setSelectedOption] = useState(firstOption);

    
    useEffect(() => {
        callback(selectedOption);
    }, [selectedOption]);

    const changeSelectedOption = () => selectedOption === firstOption ? setSelectedOption(secondOption) : setSelectedOption(firstOption);

    return (
        <div className="select">
            <span className={`select__option ${ selectedOption === firstOption ? 'active' : '' }`}>{ firstOption }</span>
            <input onChange={ changeSelectedOption } type="checkbox"/>
            <span className={`select__option ${ selectedOption === secondOption ? 'active' : '' }`}>{ secondOption }</span>
        </div>
    );
}