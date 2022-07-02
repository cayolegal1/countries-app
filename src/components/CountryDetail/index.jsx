import { memo, useMemo } from "react"
import { useParams } from "react-router-dom"


const CountryDetail = ({countries})=>{

    const {name} = useParams()
    
    const infoCountry = useMemo(()=> countries?.filter(({name:{common}}) => common.toLowerCase()===name),[countries, name]) 

    return (
        <div>
            {JSON.stringify(infoCountry)}
        </div>
    )
}

export default memo(CountryDetail)