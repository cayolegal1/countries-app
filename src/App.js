import CountriesHeader from './components/CountriesHeader/CountriesHeader';
import CountryInfo from './components/CountryInfo/CountryInfo';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { CountriesForm } from './components/CountriesForm/CountriesForm';
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState(true)


  return (
      <>
        <CountriesHeader theme={theme} setTheme={setTheme}/>
        <BrowserRouter>
          <Routes>
            <Route path={'/'}  element={<CountriesForm theme={theme}/>} />
            <Route path='/:name' element={<CountryInfo  theme={theme}/>} />
            <Route path='*' element={<h1> Not found 404</h1>} />
          </Routes> 
        </BrowserRouter>
      </>
  );
}

export default App;
