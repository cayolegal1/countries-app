import { useNavigate } from "react-router-dom"

const style = {
    borderRadius: 4,
    border      : '1px solid black',
    maxWidth    : '30vw ',
    minWidth    : '10vw'
}

const Card  =  ({svgURI, name})=>{

    const navigate =  useNavigate()

    const _handlerClick = (event)=>{
        event.stopPropagation()
        navigate(`${name.toLowerCase()}`,{state:{name}})
    }

    return(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div style={style} onClick={_handlerClick} onKeyDown={_handlerClick}>
            <img style={{width:'100%'}} src={svgURI} alt='bandera'/>
        </div>
    )
}

export default Card