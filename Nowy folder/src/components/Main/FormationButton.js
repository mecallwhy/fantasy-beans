import React from 'react'
import theSquad from './theSquad'

const FormationButton = (props) => {
    return (
        <button onClick={() => { changeFormation(props.formation) }}>{props.formation}</button> 
    )
}

const changeFormation = (formation) => {


    switch(formation){
        case "4-4-2":
            break;
        case "4-3-3":
            break;
        case "4-5-1":
            break;
        case "5-4-1":
            break;
        case "5-3-2":
            break;
        case "3-5-2":
            break;
        case "3-4-3":
            break;
    }
    
}


export default FormationButton