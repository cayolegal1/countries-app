import CountriesCard from "../CountryCard/CountryCard";
import "./index.css";

const CardContainer = ({ filteredCountries, theme }) => {
  return (
    <section
      className={
        theme ? "container container-dark" : "container container-light"
      }
    >
      {filteredCountries.map((country) => (
        <CountriesCard country={country} key={country.name} theme={theme} />
      ))}
    </section>
  );
};

export default CardContainer;
