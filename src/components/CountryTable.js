import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
const CountryTable = ({ countries }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((country) => (
                    <tr key={country.name.common}>
                        <td>{country.flag}</td>
                        <td>
                            <Link to={`/details/${country.name.common}`}>
                                {country.name.common}
                            </Link>
                        </td>
                        <td>{country.population}</td>
                        <td>{country.region}</td>
                    </tr>
                ))}


            </tbody>
        </Table>
    );
}

export default CountryTable;