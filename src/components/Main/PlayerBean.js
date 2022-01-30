import React from "react";
import recycle2 from "./images/recycle2.png";
import recycle from "./images/recycle.png";
import eliminate from "./images/eliminate.png";
import { inRange } from "./utilities.js";

export const PlayerBean = (props) => {
  const {
    playerIndex,
    position,
    extraBean,
    playerBeanProps
  } = props;

   const {
    theSquad,
    setTheSquad,
    disabledButtons,
    setDisabledButtons,
    playerToSwitchIndex,
    setPlayerToSwitchIndex,
    setStatsToShowIndex,
    setShowStats,
  } = playerBeanProps

  const eliminatePlayer = () => {
    
    let newDisabledButtons = disabledButtons.filter(button => button !== position[playerIndex].btnId)

    theSquad.goalkeepers = theSquad.goalkeepers.filter(singlePlayer => singlePlayer !== position[playerIndex])
    theSquad.defenders = theSquad.defenders.filter(singlePlayer => singlePlayer !== position[playerIndex])
    theSquad.midfielders = theSquad.midfielders.filter(singlePlayer => singlePlayer !== position[playerIndex])
    theSquad.forwards = theSquad.forwards.filter(singlePlayer => singlePlayer !== position[playerIndex])

    setDisabledButtons(newDisabledButtons)
    setTheSquad({...theSquad})
  };

  const prepareToSwitch = () => {
    
    theSquad.goalkeepers.forEach(singlePlayer => singlePlayer.className = "faded")
    theSquad.defenders.forEach(singlePlayer => singlePlayer.className = "faded")
    theSquad.midfielders.forEach(singlePlayer => singlePlayer.className = "faded")
    theSquad.forwards.forEach(singlePlayer => singlePlayer.className = "faded")
    position.forEach(singlePlayer => singlePlayer.className = "switchable")
    setPlayerToSwitchIndex(playerIndex)
    setTheSquad({...theSquad})
  }
  const switchPlayers = () => {
    let temporarySlot = position[playerIndex]
    position[playerIndex] = position[playerToSwitchIndex]
    position[playerToSwitchIndex] = temporarySlot
    
    theSquad.goalkeepers.forEach(singlePlayer => singlePlayer.className = "hoverable")
    theSquad.defenders.forEach(singlePlayer => singlePlayer.className = "hoverable")
    theSquad.midfielders.forEach(singlePlayer => singlePlayer.className = "hoverable")
    theSquad.forwards.forEach(singlePlayer => singlePlayer.className = "hoverable")
    setTheSquad({...theSquad})
  }
  const handleStats = ()=>{
    setStatsToShowIndex(position[playerIndex].btnId.marketIndex)
    setShowStats(true)
  }

  if(extraBean){
    return null
  }
  else if(!position[playerIndex]){
    return <div className="player-bean player-bean-blank"></div>
  }
  else{
    
    let className1 = "player-bean"
    let className2 = "player-bean-" + position[playerIndex].btnId.club.toLowerCase()
    let className3 = position[playerIndex].className
    
    return (
      <div
       className={
        className1 + " " +
        className2 + " " +
        className3
       }>
       <span
         className="player-bean-surname"
         style={inRange(position[playerIndex].surname.length, 0, 4) ? {fontSize: ".95em"} : 
               inRange(position[playerIndex].surname.length, 5, 7) ? {fontSize: ".85em"} : 
               {fontSize: ".65em"}}>
         {position[playerIndex].surname}
       </span>
       <span
         className="player-bean-number">
         {position[playerIndex].shirtNumber}
       </span>
       <span 
         className="player-bean-points">
         {position[playerIndex].overallPoints !== "" ? + position[playerIndex].overallPoints + "p" : ""}
       </span>
       <span 
         className="player-bean-price">
         {position[playerIndex].price !== "" ? position[playerIndex].price + "K" : ""}
         </span>
       <button
         className="player-bean-btn-stats"
         onClick={()=>{handleStats()}}>Stats</button>
       <button
         className="player-bean-btn-switch-small"
         onClick={() => {
           prepareToSwitch();
         }}>
         <img className="switch-img-small" src={recycle2} alt=""></img>
       </button>
       <button className="player-bean-btn-switch-big" 
         onClick={() => {
           switchPlayers();
         }}>
         <img className="switch-img" src={recycle} alt=""></img>
       </button>
       <button
         className="player-bean-btn-eliminate"
         onClick={() => {
           eliminatePlayer();
         }}
       >
         <img className="eliminate-img" src={eliminate} alt=""></img>
       </button>
     </div>
   );
  }
};

export default PlayerBean;
