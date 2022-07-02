import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { getCountryByName } from '../../helpers/getCountries'

export const CountryInfo = ({paises}) => {

  const [country, setcountry] = useState([])
  const {pathname} = useLocation()
  const countryPath = pathname.slice(1) 
  console.log(countryPath)
  useEffect(() => {
    
    const getData = async () => {
      
      const req = await getCountryByName(countryPath)
      console.log(req)
      setcountry(req)
    }

    getData()

  }, [countryPath])
  
  return (
    <>
    {country.map(item => <h1>{item.name}</h1>)}
    </>
  )
}

export default CountryInfo
