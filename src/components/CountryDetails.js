import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDetails({countries}) {
    const { id } = useParams();
  return (
    <div>
    {countries
        .filter(country => country.alpha3Code === id)
        .map(country => {
            return ( 
                <div key={country._id}>
                <h4>{country.name.common}</h4>
                </div>
            )
        }) }
    </div>
  )
}
