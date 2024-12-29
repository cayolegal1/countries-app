import { useNavigate } from "react-router-dom";
import "./index.css";
import "./mediaqueries.css";

const CountriesCard = ({ country, theme }) => {
  const navigate = useNavigate();

  return (
    <article
      className={theme ? "card card-dark" : "card card-light"}
      id={theme ? "" : "card-light"}
    >
      <div>
        <img
          src={country.flagImage}
          alt={country.name}
          className={
            theme ? "countryImage country-dark" : "countryImage country-light"
          }
          onClick={() =>
            navigate(`/${country.name.toLowerCase()}`, { state: { country } })
          }
        />
      </div>

      <div
        className={
          theme
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
