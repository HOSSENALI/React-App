
import '../App.css';
import React, { useEffect, useState } from 'react';

// import Table from 'react-bootstrap/Table'
import CountryTable from './CountryTable';
function Home() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))
    }, []);
    return (

        <CountryTable countries={countries} />

    );
}

export default Home;
