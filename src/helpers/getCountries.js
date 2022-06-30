import { getElements } from "./helpers"

export const getAllCountries = async () => {
  const allCountries = await fetch('https://restcountries.com/v3.1/all')
  const data = getElements(allCountries)
  return data
}

export const getCountryByName = async (name) => {

    const country = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = getElements(country)
    return data

}

export const getCountryByRegion = async (region) => {

    const countries = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = getElements(countries)
    return data
}