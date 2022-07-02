import { memo } from "react"
import Card from "../../components/Card"

const style ={
    display :'flex',
    flexWrap: 'wrap',
    alingItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
}

const Countries = ({countries})=>{
    return (
        <div style={style}>
            {countries.map(
                countryInfo=><Card
                    name={countryInfo.name.common} 
                    key={countryInfo.name.common} 
                    svgURI={countryInfo.flags.svg} />
                )
            } 
        </div>
    )
}

export default memo(Countries)