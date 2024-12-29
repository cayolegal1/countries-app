import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const CountryInfo = ({ isThemeDark }) => {
  const { state: { country = {} } = {} } = useLocation();
  const navigate = useNavigate();
  if (!country) return null;
  return (
    <>
      <button
        onClick={() => navigate("/")}
        className={
          isThemeDark
            ? "goBackButton goBackButton-dark"
            : "goBackButton goBackButton-light"
        }
      >
        ⬅️ Back
      </button>

      <section className="countryInfoContainer">
        <div>
          <img src={country.flagImage} alt={country.name} />
        </div>

        <article
          className={
            isThemeDark
              ? "generalInfo generalInfo-dark"
              : "generalInfo generalInfo-light"
          }
        >
          <h3>{country.name}</h3>
          <p>
            Native Name: <span>{country.name}</span>
          </p>
          <p>
            Population: <span>{country.population}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>
          </p>
          <p>
            Area: <span>{country.area}</span>
          </p>
          <p>
            TimeZone: <span>{country.timezone[0]}</span>
          </p>
          <p>
            Latitude: <span>{country.latlong[0]}</span>
          </p>
          <p>
            Longitude: <span>{country.latlong[1]}</span>
          </p>
          <p>
            Independent: <span>{country.independent ? "Yes" : "No"}</span>
          </p>
        </article>
      </section>
    </>
  );
};

export default CountryInfo;
