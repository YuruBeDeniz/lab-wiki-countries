import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CountryDetails({countries}) {
    const { id } = useParams();
  return (
    <div>
    {countries
        .filter(country => country.alpha3Code === id)
        .map(country => {
            return ( 
                <div key={country._id}>
                <h1>{country.name.common}</h1>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag' />
                <br />
                <h3>Capital: <p>{country.capital}</p> </h3>
                <h4>Borders:</h4>
                {country.borders.length === 0 ? 'No borders' :
                country.borders.map((border) => {
                  return (
                    <p key={border}>{border}</p>
                  )
                })}
                <h4>Languages:</h4>
                {Object.values(country.languages).map((language) => {
                  return (
                    <p key={language}>{language}</p>
                  )
                })}
                </div>
            )
        }) }
    <br />
    <div>
      <Link to={'/'} >Go back Home</Link>
    </div>    
    </div>
  )
}
