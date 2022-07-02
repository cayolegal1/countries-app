import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import CountryDetail from './components/CountryDetail'
import Countries from './containers/Countries'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(()=>{
    const helper  =  async ()=>{
      console.log('fetching ...')
      const {data} = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(data)
    }
    if (!countries.length)
      helper().catch(err => console.log(err))
  },[countries.length])

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Countries countries={countries}/>}/>
          <Route path='/:name' element={<CountryDetail />}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
