import React from 'react'
const Search = ({value,handleChange,countries}) => {
    const filtered=countries;
    return ( <>
    <input type="text" value={value} onChange={handleChange} /> 
    </> );
}
 
export default Search;
