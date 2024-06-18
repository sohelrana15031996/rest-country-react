import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import  "../Countries/country.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [showFlags, setShowFlags] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
  }, []);

  const visited_country =(country)=>{
    const newVisit = [...visitedCountries, country.name.common];
    setVisitedCountries(newVisit);
    console.log('Add this country as visited country');
    console.log(country.name.common);
    console.log(visitedCountries);

  }

  const handleShowFlags = country =>{
    console.log(country);
    setShowFlags([...showFlags, country.flags.svg]);
  }
  return (
    <div>
      <p>Countries: {countries.length}</p>
      <p>Visited Country: {visitedCountries.length}</p>
      <p>Flags: {showFlags.length}</p>
      <div>
        <ul>
          {
            visitedCountries.map(visit => <li>{visit}</li>)
          }
        </ul>
      </div>
      <div>
      <ul>
          {
            showFlags.map(flag => <li><img src={flag} alt="" /></li>)
          }
        </ul>
      </div>
      <div className="countryGrid">
      {
        countries.map(country => <Country 
          key={country.cca2} 
          visiteCountry = {visited_country}
          getFlags = {handleShowFlags}
          country={country}>

          </Country>)
      }
      </div>
    </div>
  );
};

export default Countries;