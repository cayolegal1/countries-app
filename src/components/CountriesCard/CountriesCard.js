import React from 'react'
import { useNavigate }  from 'react-router-dom'
//import CountryInfo from '../CountryInfo/CountryInfo'
import './index.css'
import './mediaqueries.css'


export const CountriesCard = ({countries, theme}) => {

  const navigate = useNavigate()
  return (

      <article className={theme ? 'card card-dark' : 'card card-light'} id={theme ? '' : 'card-light'}>
          <div>
            <img    
            src={countries.flagImage} 
            alt={countries.name} 
            className={theme ? 'countryImage country-dark' : 'countryImage country-light'} 

            onClick={() => navigate(`/${countries.name.toLowerCase()}`, {state: {countries}})}
            />
          </div>

        <div className={theme ? 'countriesInfo card-dark' : 'countriesInfo card-light info-light'}>
            <h4>{countries.name}</h4>
            <p>Population: <span> {countries.population} </span> </p>
            <p>Region: <span> {countries.region} </span> </p>
            <p>Capital: <span> {countries.capital} </span> </p>
        </div>
      </article>
  )
}

export default CountriesCard;