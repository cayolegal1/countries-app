import React, {} from 'react'
//import { getAllCountries } from '../../helpers/getCountries'
import CountriesCard from '../CountriesCard/CountriesCard'
import './index.css'

export const CardContainer =  ({countries, theme}) => {


  return (

    <section className='container' >

      {countries.map(item => <CountriesCard countries={item} key={item.name} theme={theme}/>)}

    </section >

  )
  
}

export default CardContainer;