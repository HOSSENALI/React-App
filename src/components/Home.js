
import '../App.css';
import React, { useEffect, useState } from 'react';

// import Table from 'react-bootstrap/Table'
import CountryTable from './CountryTable';
import Search from './Search';
function Home() {
    const [countries, setCountries] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [filteredData,setFiltereddata]=useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) =>{ 
                setCountries(data);
                setFiltereddata(data);
            })
        
    }, []);

    const handleChange = (e) => {
        setKeyword(e.target.value);
        let filteredData = countries.filter((country) => {
            return (
                country.name.common
                    .toLowerCase()
                    .search(keyword.toLocaleLowerCase()) != -1);
        });
        setFiltereddata(filteredData);
    };
    return (
        <div className='home'>
            <div className='search'><Search value={keyword} handleChange={handleChange} countries={countries}  /></div>
            <CountryTable  countries={filteredData} />
        </div>


    );
}

export default Home;
