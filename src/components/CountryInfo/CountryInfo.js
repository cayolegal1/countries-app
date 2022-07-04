import React, {} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'

const CountryInfo = ({theme}) => {
      
  const {state: {countries}} = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <button onClick={()=> navigate('/')} className='goBackButton'>⬅️ Back</button>
      <section className='countryInfoContainer'>
        <div>
          <img src={countries.flagImage} alt={countries.name}/>
        </div>

        <article className='generalInfo'>
          <h3>{countries.name}</h3>
          <p>Native Name: <span>{countries.name}</span></p>
          <p>Population: <span>{countries.population}</span></p>
          <p>Region: <span>{countries.region}</span></p>
          <p>Capital: <span>{countries.capital}</span></p>
          <p>Area: <span>{countries.area}</span></p>
          <p>TimeZone: <span>{countries.timezone[0]}</span></p>
          <p>Latitude: <span>{countries.latlong[0]}</span></p>
          <p>Longitude: <span>{countries.latlong[1]}</span></p>
          <p>Independent: <span>{countries.independent ? 'Yes' : 'No'}</span></p>
        </article>
      </section>
    </>
  )
}

export default CountryInfo
