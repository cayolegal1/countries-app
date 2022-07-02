import React from 'react'
import { useNavigate, Link }  from 'react-router-dom'
//import CountryInfo from '../CountryInfo/CountryInfo'
import './index.css'
import './mediaqueries.css'


export const CountriesCard = ({countries}) => {

  const navigate = useNavigate()
  return (
    <>


      <article className='card'>
          {/* <Routes>
            <Route path='/:name' element={<CountryInfo countries={countries}/>} />
          </Routes> */}

          <div>

        <Link to={`/${countries.name.toLowerCase()}`} style={{color: '#f8f9fd'}}>

            <img
            src={countries.flagImage} 
            alt={countries.name} 
            className='countryImage' 
            onClick={() => navigate(`/${countries.name.toLowerCase()}`)}

            />

        </Link>
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