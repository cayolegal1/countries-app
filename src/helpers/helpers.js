const sortData = (firstEl, secondEl) => {

    if(firstEl.name < secondEl.name) return -1
    else if(firstEl.name > secondEl.name) return 1 
    else return 0
  }
  
export const getElements = async (request) => {
  
      const element = await request.json()
      
      let data = element.map(item => ({
  
          name: item.name.common, 
          capital: item.capital,
          population: item.population, 
          region: item.subregion,
          flagImage: item.flags.svg
      
        }))
  
        data.sort(sortData)
  
        return data 
  }

