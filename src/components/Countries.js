import React, { useState } from 'react';
import Country from './Country';

const Countries = ({ countriesToDisplay }) => {
    const country = countriesToDisplay[0];

    const [show, setShow] = useState(false);
    const [countryToShow, setCountryToShow] = useState({});

    return (
        <>
            {
                countriesToDisplay.length > 10 ? (
                    <div>Too many matches, specify another filter</div>
                ) :

                countriesToDisplay.length === 1 ? (
                    <div>
                        <Country country={country} />
                    </div>
                ) :

                <div>
                   { 
                        countriesToDisplay.map(country => (
                            <div key={country.name.common}>
                                <span>{country.name.common}</span>
                                <button onClick={() => {
                                    setShow(!show)
                                    setCountryToShow(country)
                                }}>Show</button>
                                <br/>
                            </div>
                        ))
                    }
                </div>

                
            }

            {
                show && (
                    <Country country={countryToShow} />
                )
            }
        </>
    );
}

export default Countries;
