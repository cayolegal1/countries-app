import React from 'react'
//import { getAllCountries } from '../../helpers/getCountries'
import CountriesCard from '../CountriesCard/CountriesCard'
import './index.css'

export const CardContainer =  ({countries, setCountries}) => {

  return (

    <section className='container' >

      {countries.map(item => <CountriesCard countries={item} key={item.name} />)}

    </section >

  )
  
}

export default CardContainer;