import React, { useEffect, useState } from 'react';
import './Country.css'

const Country = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));
    },[])
    return (
        <div>
            <h1>Total: {country.length}</h1>
            <div className='countries'>
                
            {
                    country.map(countries => <Information name={countries.name.common}
                        
                        capital={countries.capital}
                        population={countries.population}
                        flags={countries.flags.png}
                        area={countries.area}
                    >
                        
                        </Information>)
                }
                {
                    country.map(c=>console.log(c.area))
                }
            </div>
        </div>
    );
};

function Information(props) {
    return (
        <div className='country'>
           <img src= {props.flags} alt=''></img>
            <h3>Name: {props.name}</h3>
            <p> Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
        </div>
    )
}

export default Country;