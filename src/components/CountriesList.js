import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList({countries}) {
  return (
    <div className='row'>
    <div className='text-center' >
    <div className="justify-content-center">
    {countries.map((country) => {
      console.log(country.name.common.split(' '))
      return (
        <div  key={country._id}>
          <h3><Link 
                to={`/${country.alpha3Code}`}
                className="text-decoration-none text-black-50">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag' />
                <br />
                {country.name.common.split('')}
                </Link></h3>
        </div>
      )
    })}
    </div>
    </div>
    </div>
  )
}
