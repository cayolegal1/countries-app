import React from 'react'
import { useNavigate }  from 'react-router-dom'
//import CountryInfo from '../CountryInfo/CountryInfo'
import './index.css'
import './mediaqueries.css'


export const CountriesCard = ({countries, theme}) => {

  const navigate = useNavigate()
  return (

      <article className='card'>
          <div>
            <img    
            src={countries.flagImage} 
            alt={countries.name} 
            className='countryImage' 

            onClick={() => navigate(`/${countries.name.toLowerCase()}`, {state: {countries}})}
            />
          </div>

        <div className='countriesInfo'>
            <h4>{countries.name}</h4>
            <p>Population: <span> {countries.population} </span> </p>
            <p>Region: <span> {countries.region} </span> </p>
            <p>Capital: <span> {countries.capital} </span> </p>
        </div>
      </article>
  )
}

export default CountriesCard;