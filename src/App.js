import CountriesHeader from './components/CountriesHeader/CountriesHeader';
import CountryInfo from './components/CountryInfo/CountryInfo';
import { createContext, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

const CountryContext = createContext({})
console.log(CountryContext)

function App() {

  const [pais, setpais] = useState({})
  const value = {

    pais,
    setpais
  }
  return (
    
    <CountryContext.Provider value={value} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountriesHeader/>} />
          <Route path='/:name' element={<CountryInfo/>} />
          <Route path='*' element={<h1> Not found 404</h1>} />
        </Routes> 
      </BrowserRouter>
    </CountryContext.Provider >

  );
}

export default App;
