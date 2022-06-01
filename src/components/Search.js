import React from 'react'
const Search = ({ value, handleChange }) => {

    return (
        <>
            <input type="text" value={value} onChange={handleChange} />
        </>);
}

export default Search;
