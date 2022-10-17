import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList({countries}) {
  return (
    <div>
    {countries.map((country) => {
      return (
        <div key={country._id}>
          <h3><Link to={`/${country.alpha3Code}`}>{country.name.common}</Link></h3>
        </div>
      )
    })}
    </div>
  )
}
