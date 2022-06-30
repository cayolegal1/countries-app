import React, {useState, useEffect} from 'react'
import CardContainer from '../CardContainer/CardContainer'
import {getAllCountries ,getCountryByRegion } from '../../helpers/getCountries'

import './index.css'

const CountriesForm = () => {

  const [countries, setCountries] = useState([])

  const countriesChanger = async (event) => {

    const region = event.target.value
    const data = await getCountryByRegion(region)
    setCountries(data)
  }

  const handlerFunction = async () => {

    const data = await getAllCountries()
    setCountries(data)    
  }


  useEffect(() => {

    handlerFunction()
    
  } , [])


  useEffect(() => {

    countriesChanger()

  }, [countries])

  return (

    <>
    <section>
        <input type={'text'} placeholder='Search for a country...'></input>
        <select onChange={countriesChanger} defaultValue={'default'}>

            <option value={'default'} disabled>Filter by Region</option>
            <option value={'Asia'}>Asia</option>
            <option value={'Africa'}>Africa</option>
            <option value={'Central America'}>Central America</option>
            <option value={'Europe'}>Europe</option>
            <option value={'North America'}>North America</option>
            <option value={'South America'}>South America</option>
            <option value={'Oceania'}>Oceania</option>
            
        </select>
    </section>  

    <CardContainer countries={countries} setCountries={setCountries} />

    </>
  )
}

export  {CountriesForm};