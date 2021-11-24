import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Country = ({ country }) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState(country);

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
            .then(response => {
                setWeather(response.data);
        });
    }, [api_key, country.capital]);

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
              {
                Object.entries(country.languages).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))
              }
            </ul>
            <img 
              src={country.flags.png}
              alt='flag'
            />

            <div>
                <h2>Weather in {country.capital}</h2>
                <h3>temperature: {weather?.current?.temperature} Celsius</h3>
                <img
                    src={weather?.current?.weather_icons}
                    alt={weather?.current?.weather_descriptions}
                />
                <h3>wind: {weather?.current?.wind_speed} mph direction</h3>
            </div>
        </div>
    );
}

export default Country;
