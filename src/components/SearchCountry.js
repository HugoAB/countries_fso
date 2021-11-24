import React from 'react';

const SearchCountry = ({ action, filter }) => {
    return (
        <div>
            find countries <input onChange={action} value={filter} />
        </div>
    );
}

export default SearchCountry;
