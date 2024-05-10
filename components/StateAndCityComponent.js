import { useEffect, useState } from 'react';
import { State, City } from 'country-state-city';
//import Dropdown from './Commons/Dropdown'; // Assuming the path is correct

const StateAndCityComponent = ({  cityCode = 'WB', onChange }) => {

    const [selectCountry, SetSelectCountry] = useState('IN');
    const[selectState,SetSelectState] = useState('KA');

    const stateData = State.getStatesOfCountry(selectCountry).map(state => ({
        value: state.isoCode,
        displayValue: state.name
    }));

    const cityData = City.getCitiesOfState(selectCountry, selectState).map(city => ({
        value: city.name,
        displayValue: city.name
    }));

    const handleStateChange = (event) => {
        // Call the parent component's onChange function with the selected value
        const selectedValue = event.target.value;
        SetSelectState(selectedValue)
        console.log(selectedValue)
    };

    const handleCityChange = (selectedCity) => {
        // Handle city change logic here
        console.log('Selected city:', selectedCity);
    };

    return (
        <>
            <p>All States of - {selectCountry}</p>
            
            <select onChange={handleStateChange}>
            {stateData.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.displayValue}
                </option>
            ))}
            </select>
            
            <select>
            {cityData.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.displayValue}
                </option>
            ))}
        </select>


            <p>All Cities of Telangana({selectState}) Hie</p>
            {/* <Dropdown options={cityData} onChange={handleCityChange} /> */}
        </>
    );
};

export default StateAndCityComponent;