import React from 'react'
import { CountriesForm } from '../CountriesForm/CountriesForm'
import moon from '../../img/moon.png'
import './index.css'

export const Header = () => {


  return (
    <>
    <header>
      <span>Where in the World?</span>
      <button aria-labelledby='LigthMode/DarkMode'>
        <img src={moon} alt='moon'/>
        <span>Dark mode</span>
      </button>
    </header>

    <CountriesForm />  
    </>
  )
}

export default Header;