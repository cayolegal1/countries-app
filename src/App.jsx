import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import CountryDetail from './components/CountryDetail'

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
  },[countries])

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/:name' element={<CountryDetail countries={countries}/>}/>
        </Routes>
        <Link to="/argentina" >argentina</Link>
      </BrowserRouter>

  )
}

export default App
