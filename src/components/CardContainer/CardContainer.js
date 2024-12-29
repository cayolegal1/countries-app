import CountriesCard from "../CountryCard/CountryCard";
import "./index.css";

const CardContainer = ({ filteredCountries, isThemeDark }) => {
  return (
    <section
      className={
        isThemeDark ? "container container-dark" : "container container-light"
      }
    >
      {filteredCountries.map((country) => (
        <CountriesCard
          country={country}
          key={country.name}
          isThemeDark={isThemeDark}
        />
      ))}
    </section>
  );
};

export default CardContainer;
