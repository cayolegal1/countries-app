import { memo} from "react"
import { useLocation} from "react-router-dom"


const CountryDetail = ()=>{

    const {state} = useLocation()

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    )
}

export default memo(CountryDetail)