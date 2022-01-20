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
    balance,
    setBalance,
    playerToSwitchIndex,
    setPlayerToSwitchIndex,
    setStatsToShowIndex,
    setShowStats,
  } = playerBeanProps

  const eliminatePlayer = () => {
    
    let newDisabledButtons = disabledButtons.filter(button => button !== position[playerIndex].btnId)
    let newBalance = balance + position[playerIndex].price

    theSquad.goalkeepers = theSquad.goalkeepers.filter(singlePlayer => singlePlayer !== position[playerIndex])
    theSquad.defenders = theSquad.defenders.filter(singlePlayer => singlePlayer !== position[playerIndex])
    theSquad.midfielders = theSquad.midfielders.filter(singlePlayer => singlePlayer !== position[playerIndex])
    theSquad.forwards = theSquad.forwards.filter(singlePlayer => singlePlayer !== position[playerIndex])

    setBalance(Math.round(newBalance *10)/10)
    setDisabledButtons(newDisabledButtons)
    setTheSquad({...theSquad})
  };

  const prepareToSwitch = () => {
    
    theSquad.goalkeepers.forEach(singlePlayer => singlePlayer.className3 = "faded")
    theSquad.defenders.forEach(singlePlayer => singlePlayer.className3 = "faded")
    theSquad.midfielders.forEach(singlePlayer => singlePlayer.className3 = "faded")
    theSquad.forwards.forEach(singlePlayer => singlePlayer.className3 = "faded")
    position.forEach(singlePlayer => singlePlayer.className3 = "switchable")
    setPlayerToSwitchIndex(playerIndex)
    setTheSquad({...theSquad})
  }
  const switchPlayers = () => {
    let temporarySlot = position[playerIndex]
    position[playerIndex] = position[playerToSwitchIndex]
    position[playerToSwitchIndex] = temporarySlot
    
    theSquad.goalkeepers.forEach(singlePlayer => singlePlayer.className3 = "hoverable")
    theSquad.defenders.forEach(singlePlayer => singlePlayer.className3 = "hoverable")
    theSquad.midfielders.forEach(singlePlayer => singlePlayer.className3 = "hoverable")
    theSquad.forwards.forEach(singlePlayer => singlePlayer.className3 = "hoverable")
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
    return (
      <div
       className={
         position[playerIndex].className1 + " " +
         position[playerIndex].className2 + " " +
         position[playerIndex].className3 + " " +
         position[playerIndex].className4
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
