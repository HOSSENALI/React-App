import React from 'react'
import Table from 'react-bootstrap/Table'
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
                    <tr>
                        <td>{country.flag}</td>
                        <td>{country.name.common}</td>
                        <td>{country.population}</td>
                        <td>{country.region}</td>
                    </tr>
                ))}

                
            </tbody>
        </Table>
    );
}

export default CountryTable;