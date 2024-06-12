import './Country.css'
const Country = ({country}) => {
  console.log(country);
  const {name, flags} = country;
  return (
    <div className='country'>
      <p>Name: {name?.common}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;