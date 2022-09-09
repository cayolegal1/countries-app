import React, {useState, useEffect, useMemo} from 'react'
import CardContainer from '../CardContainer/CardContainer'
import {getAllCountries ,getCountryByRegion } from '../../helpers/getCountries'
import './index.css'

const CountriesForm = ({theme}) => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const handlerFunction = async () => {

    const data = localStorage.getItem('countries') || [];
    const dataStorage = typeof data === "string" ? JSON.parse(data) : '';

    if(dataStorage.length === 0) {

      const allCountries = await getAllCountries()
      setCountries(allCountries)
      localStorage.setItem('countries', JSON.stringify(allCountries))
      return
    }

    setCountries(dataStorage)
    return
  }

  const filterElements = (e) => {

    const value = e.target.value
    setSearch(value)
  }
  
  const countriesChanger = async (event) => {

    const region = event.target.value
    const data = await getCountryByRegion(region)
    setCountries(data)
  }

  useEffect(() => {

    
    handlerFunction()
    
  } , [])


  useEffect(() => {

    countriesChanger()

  }, [countries])


  const filteredCountries = useMemo(() => {

    const allCountries = !search.length > 1 ? countries : countries.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return allCountries

  }, [search, countries])

  return (

    <>
      <section className={theme ? 'dark-theme' : 'light-theme'}>
        
          <input 
          type={'text'}
          placeholder='Search for a country...'
          name='countrySearcher'
          onChange={filterElements}
          value={search}
          className={theme ? 'dark' : 'light'} />   

          <select
          onChange={countriesChanger}
          defaultValue={'default'} 
          className={theme ? 'select-dark' : 'select-light'} >
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

      <CardContainer countries={filteredCountries}  theme={theme} />

    </>
  )
}

export  {CountriesForm};