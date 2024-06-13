import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
  console.log(country);
  const {name, flags} = country;
  const [visit, setVisit] = useState(true);
  function countryVisited(){
    setVisit(!visit);
  }
  return (
    <div className='country'>
      <p>Name: {name?.common}</p>
      <img src={flags.png} alt="" /><br />
      <button onClick={countryVisited}>{visit ? 'Visited': 'Need to go'}</button>
      <p>{visit&&'I have visted.'}</p>
    </div>
  );
};

export default Country;