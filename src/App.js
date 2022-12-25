import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CountriesForm } from './components/CountriesForm/CountriesForm';
import { useState } from 'react';
import Header from './components/CountriesHeader/CountriesHeader';
import CountryInfo from './components/CountryInfo/CountryInfo';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';


function App() {

  const [theme, setTheme] = useState(true)

  return (
      <>
        <Header theme={theme} setTheme={setTheme} />
        <BrowserRouter>
          <Routes>
            <Route 
              path='/'  
              element={
              <CountriesForm theme={theme}>
                <CardContainer />
              </CountriesForm>
              } />  
            <Route path='/:name' element={<CountryInfo  theme={theme}/>} />
            <Route path='/*' element={<h1> Not found 404</h1>} />
          </Routes> 
        </BrowserRouter>
      </>
  );
}

export default App;
