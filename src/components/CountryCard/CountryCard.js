import { useNavigate } from "react-router-dom";
import "./index.css";
import "./mediaqueries.css";

const CountriesCard = ({ country, isThemeDark }) => {
  const navigate = useNavigate();

  return (
    <article
      className={isThemeDark ? "card card-dark" : "card card-light"}
      id={isThemeDark ? "" : "card-light"}
    >
      <div>
        <img
          src={country.flagImage}
          alt={country.name}
          className={
            isThemeDark
              ? "countryImage country-dark"
              : "countryImage country-light"
          }
          onClick={() =>
            navigate(`/${country.name.toLowerCase()}`, { state: { country } })
          }
        />
      </div>

      <div
        className={
          isThemeDark
            ? "countriesInfo card-dark"
            : "countriesInfo card-light info-light"
        }
      >
        <h4>{country.name}</h4>
        <p>
          Population: <span> {country.population} </span>{" "}
        </p>
        <p>
          Region: <span> {country.region} </span>{" "}
        </p>
        <p>
          Capital: <span> {country.capital} </span>{" "}
        </p>
      </div>
    </article>
  );
};

export default CountriesCard;
