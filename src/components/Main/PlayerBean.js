import React from "react";
import recycle2 from "./images/recycle2.png";
import recycle from "./images/recycle.png";
import eliminate from "./images/eliminate.png";
import { inRange } from "./utilities.js";

export const PlayerBean = (props) => {
  const {
    player,
    extraBean,
    playerBeanProps
  } = props;

   const {
    theSquad,
    setTheSquad,
    playerToSwitchId,
    setPlayerToSwitchId,
    setStatsToShow,
    setShowStats,
  } = playerBeanProps
  let playersOfSamePosition = player && theSquad.filter(singlePlayer => singlePlayer.playerData.position === player.playerData.position)
  const eliminatePlayer = () => {
    setTheSquad([...theSquad.filter(singlePlayer => singlePlayer.playerData.id !== player.playerData.id)])
  };
  const prepareToSwitch = () => {
    theSquad.forEach(singlePlayer => singlePlayer.playerData.className = "faded")
    playersOfSamePosition.forEach(singlePlayer => singlePlayer.playerData.className = "switchable")
    setPlayerToSwitchId(player.playerData.id)
    setTheSquad([...theSquad])
  }
  const switchPlayers = () => {
    let playerToSwitch = theSquad.find(singlePlayer => singlePlayer.playerData.id === playerToSwitchId)
    let temporarySlot = player.role
    player.role = playerToSwitch.role
    playerToSwitch.role = temporarySlot
    theSquad.forEach(singlePlayer => singlePlayer.playerData.className = "hoverable")
    setTheSquad([...theSquad])
  }
  const handleStats = ()=>{
    setStatsToShow(player.playerData)
    setShowStats(true)
  }

  if(extraBean){
    return null;
  }
  else if(!player){
    return <div className="player-bean player-bean-blank"></div>
  }
  else{
    let className1 = "player-bean"
    let className2 = "player-bean-" + player.playerData.club.toLowerCase().slice(0, 3)
    let className3 = player.playerData.className
    
    return (
      <div
       className={
        className1 + " " +
        className2 + " " +
        className3
       }>
       <span
         className="player-bean-surname"
         style={inRange(player.playerData.surname.length, 0, 4) ? {fontSize: ".95em"} : 
               inRange(player.playerData.surname.length, 5, 7) ? {fontSize: ".85em"} : 
               {fontSize: ".65em"}}>
         {player.playerData.surname}
       </span>
       <span
         className="player-bean-number">
         {player.playerData.shirtNumber}
       </span>
       <span 
         className="player-bean-points">
         {player.playerData.overallPoints !== "" ? + player.playerData.overallPoints + "p" : ""}
       </span>
       <span 
         className="player-bean-price">
         {player.playerData.price !== "" ? player.playerData.price + "K" : ""}
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
