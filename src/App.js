// import { useEffect, useState } from 'react';
import './App.css';
import Barca from './components/Barca/Barca';
import Country from './components/Country/Country'

function App() {
  return (
    <div className="App">
      <p>Hello From Rest Country</p>
      <Country></Country>
      <Barca></Barca>
    </div>
  );
}

// function Country() {
//   const [country, setCountry] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountry(data));
//   },[])
//   return (
//     <div>
//       <p>Country: {country.length}</p>
//       {
//         country.map(countries => <Information name={countries.name.common} capital={countries.capital}></Information>)
//       }
//     </div>
//   )
// }

// function Information(props) {
//   return (
//     <div className='info'>
//       <h4>name: {props.name}</h4>
//       <p>capital: { props.capital}</p>
//     </div>
//   )
// }

export default App;
