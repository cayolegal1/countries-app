import CountriesCard from '../CountriesCard/CountriesCard'
import './index.css'

const CardContainer =  ({filteredCountries, theme}) => {

  return (

    <section className={theme ? 'container container-dark' : 'container container-light'} >

      {filteredCountries.map(item => <CountriesCard countries={item} key={item.name} theme={theme}/>)}

    </section >

  )
  
}

export default CardContainer;