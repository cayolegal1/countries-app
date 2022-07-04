import React, {useState, useEffect} from 'react'
import CardContainer from '../CardContainer/CardContainer'
import {getAllCountries ,getCountryByRegion } from '../../helpers/getCountries'

import './index.css'

const CountriesForm = ({theme}) => {

  const [countries, setCountries] = useState([])
  const [search, setsearch] = useState('')
  const [filterCountries, setfilterCountries] = useState([])

  const filterData = () => {

    if(search.length < 1 ) setfilterCountries(countries) 
    else setfilterCountries(countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())))
  }

  const filterElements = (e) => {

    const value = e.target.value
    setsearch(value)
  }
  
  const countriesChanger = async (event) => {

    const region = event.target.value
    const data = await getCountryByRegion(region)
    setCountries(data)
    setfilterCountries(data)
    
  }

  const handlerFunction = async () => {

    const data = await getAllCountries()
    setCountries(data)
    setfilterCountries(data)
  }

  useEffect(() => {

    
    handlerFunction()
    
  } , [])


  useEffect(() => {

    countriesChanger()

  }, [countries])

  useEffect(() => {

    filterData()

  }, [search])

  return (

    <>
    <section className={theme ? 'dark-theme' : 'light-theme'}>
      
          <input 
          type={'text'}
          placeholder='Search for a country...'
          name='countrySearcher'
          onChange={filterElements}
          value={search}
          className={theme ? 'dark' : 'light'}
          >   
          </input>

        <select
        onChange={countriesChanger}
        defaultValue={'default'} 
        className={theme ? 'select-dark' : 'select-light'}
        >
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

    <CardContainer countries={filterCountries} theme={theme} />

    </>
  )
}

export  {CountriesForm};