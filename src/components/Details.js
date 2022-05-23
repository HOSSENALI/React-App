import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { name } = useParams();
    const [countries, setCountries] = useState([]);
    const [filteredData, setFiltereddata] = useState("");
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))

    }, []);

    // countries.filter((country) => country.name.common === name))
    //         console.log(country);
    // }
    return (
        <div>
            {countries.filter((country) => country.name.common === name).map(filteredCountry => (

                <div key={filteredCountry.name.common}> 
                 <h1>Country name:{filteredCountry.name.common}</h1>
                 <h1>Flag:{filteredCountry.flag}</h1>
                 <h1>Population:{filteredCountry.population}</h1>
                 </div>
                 

            ))}
        </div>
    );
}

export default Details;