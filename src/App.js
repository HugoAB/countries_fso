import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchCountry from './components/SearchCountry';
import Countries from './components/Countries';

function App() {
  
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const countriesToDisplay = countries.filter(country => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <SearchCountry action={handleFilter} value={filter} />

      <Countries countriesToDisplay={countriesToDisplay} />
      
    </div>
  );
}

export default App;
