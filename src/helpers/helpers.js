const sortCountryByName = (firstEl, secondEl) => {
  if (firstEl.name < secondEl.name) return -1;
  else if (firstEl.name > secondEl.name) return 1;
  else return 0;
};

const getCountry = async (request) => {
  const element = await request.json();

  let data = element.map((item) => ({
    name: item.name.common,
    nativeName: item.name.nativeName,
    capital: item.capital,
    population: item.population,
    region: item.subregion,
    flagImage: item.flags.svg,
    area: item.area,
    languages: item.languages,
    timezone: item.timezones,
    independent: item.independent,
    latlong: item.latlng,
  }));

  data.sort(sortCountryByName);

  return data;
};

export { getCountry };
