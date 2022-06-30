import React from 'react'
import './index.css'

export const CountriesCard = ({countries}) => {
  return (
    <>
      <article className='card'>

        <div>    
          <img src={countries.flagImage} alt={countries.name} className='countryImage'/>
        </div>

        <div className='countriesInfo'>
            <h4>{countries.name}</h4>
            <p>Population: <span> {countries.population} </span> </p>
            <p>Region: <span> {countries.region} </span> </p>
            <p>Capital: <span> {countries.capital} </span> </p>
        </div>

        </article>
    </>
  )
}

export default CountriesCard;