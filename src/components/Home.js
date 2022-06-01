import '../App.css';
import React, { useCallback, useEffect, useState } from 'react';

import CountryTable from './CountryTable';
import Search from './Search';
import CountryData from './CountryData';
function Home() {

    const [keyword, setKeyword] = useState("");
    const [filteredData] = CountryData(keyword);

    const handleChange = useCallback((e) => {
        setKeyword(e.target.value);
        console.log("serach");
    },[keyword]);
    return (
        <div className='home'>
            <div className='search'>
                <Search value={keyword} handleChange={handleChange} />
            </div>
            <CountryTable countries={filteredData} />
        </div>


    );
}

export default Home;
