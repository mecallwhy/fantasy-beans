import React from "react"
import recycle2 from './images/recycle2.png'
import recycle from './images/recycle.png'

export const PlayerBean = (props) => {

   
    return (
        <div className={props.className}>
            <span className="player-bean-surname">{props.surname}</span>
            <span className="player-bean-number">{props.shirtNumber}</span>
            <span className="player-bean-points">{props.overallPoints}</span>
            <span className="player-bean-price">{props.price}</span>
            <button className="player-bean-btn-stats">Stats</button>
            <button className="player-bean-btn-switch-small"><img className="switch-img-small" src={recycle2}></img></button>
            <button className="player-bean-btn-switch-big"><img className="switch-img" src={recycle}></img></button>
            <button className="player-bean-btn-eliminate">X</button>
        </div>
    )
}


export default PlayerBean