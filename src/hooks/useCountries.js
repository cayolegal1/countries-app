import { getCountry } from "../helpers/helpers";

const baseUrl = "https://restcountries.com/v3.1";

export const useCountries = () => {
  const getAllCountries = async () => {
    const allCountries = await fetch(`${baseUrl}/all`);
    const data = getCountry(allCountries);
    return data;
  };

  const getCountryByName = async (name) => {
    const country = await fetch(`${baseUrl}/name/${name}`);
    const data = getCountry(country);
    return data;
  };

  const getCountryByRegion = async (region) => {
    const countries = await fetch(`${baseUrl}/region/${region}`);
    const data = getCountry(countries);
    return data;
  };

  return {
    getAllCountries,
    getCountryByName,
    getCountryByRegion,
  };
};
