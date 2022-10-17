import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        console.log(response.data)
        setAllCountries(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<CountriesList countries={allCountries} />}/>
      <Route path='/:id' element={<CountryDetails countries={allCountries} />} />
    </Routes>
    </div>
  );
}

export default App;
