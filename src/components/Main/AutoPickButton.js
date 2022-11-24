import React from "react";
import players from "./Players";
import {findFirstFreeRole} from "./utilities.js";

const AutoPickButton = (props)=>{
    //this component hires the squad of 15 unique random players, but with restrictions: 
    //    max 3 players per club, 
    //    exactly 2 goalkeepers, 5 defensors, 5 midfielders and 3 forwards
    //    total value of players must not be less than user's budget-1 but within the budget
    //    the squad must contain at least one "star" - one of the most expensive players

  const {
    clubTotalValue,
    setTheSquad, 
    playersPerClubLimit,
    positions,
  } = props;

  const handleAutoPick = () => {
    let averageBudgetPerPlayer = 0;
    let moneySpent = 0;
    let newPlayer;
    const playersToHire = [];
    const isWithinLimits = ( player ) => {
      const firstFreeRole = findFirstFreeRole(positions, player, playersToHire);
      if(firstFreeRole === undefined){
        return false;
      }
      if (playersToHire.includes(player)){
        return false;
      }
      if (playersToHire.filter(singlePlayer => singlePlayer.playerData.club === player.club).length >= playersPerClubLimit){
        return false;
      }
      playersToHire.push({
        role: firstFreeRole,
        playerData: player
      })
      return true;
    }

    const stars = players.filter(player => player.price >= 19)                         //hiring 1 "star"
    newPlayer = stars[Math.floor(Math.random()*stars.length)]
    if(isWithinLimits(newPlayer)){
      moneySpent = moneySpent + newPlayer.price;
    }
    const goalkeepers = players.filter(player => player.position === "gk");             //hiring 2 goalkeepers
    while(playersToHire.length < 3){                                               
      newPlayer = goalkeepers[Math.floor(Math.random()*goalkeepers.length)]
      if(isWithinLimits(newPlayer)){
        moneySpent = moneySpent + newPlayer.price;
      }
    }
    while(playersToHire.length < 11){                                                  //hiring 8 random players
      newPlayer = players[Math.floor(Math.random()*players.length)]
      if(isWithinLimits(newPlayer)){
        moneySpent = moneySpent + newPlayer.price;
      }
    }
    averageBudgetPerPlayer = Math.round(((clubTotalValue - moneySpent) / 4)*10)/10;    //hiring 4 players depending on budget
    let infiniteLoopPrevention = 0;
    while(playersToHire.length < 14 && infiniteLoopPrevention < 500){
      const playersOfAverageValue = players.filter(player => 
        player.price >= averageBudgetPerPlayer - 1 && 
        player.price <= averageBudgetPerPlayer + 1)
      newPlayer = playersOfAverageValue[Math.floor(Math.random()*playersOfAverageValue.length)]
      if (isWithinLimits(newPlayer)){
        moneySpent = moneySpent + newPlayer.price;
      }
      infiniteLoopPrevention++;
    }
    if(playersToHire.length !== 14){
      handleAutoPick();
    }
    if((clubTotalValue - moneySpent) < 5 || (clubTotalValue - moneySpent) > 22){       //hiring last player - the most expensive that user can afford
      handleAutoPick();
    }
    else{
      infiniteLoopPrevention = 0;
      const mostExpensiveAffordablePlayers = players.filter(player =>
        player.price >= clubTotalValue - moneySpent -1 &&
        player.price <= clubTotalValue - moneySpent)
        while(playersToHire.length !== 15 && infiniteLoopPrevention < 500){
          newPlayer = mostExpensiveAffordablePlayers[Math.floor(Math.random()*mostExpensiveAffordablePlayers.length)]
          if(isWithinLimits(newPlayer)){
            moneySpent = moneySpent + newPlayer.price
          }
          infiniteLoopPrevention++
        }
        if(playersToHire.length !== 15){
          handleAutoPick();
        }
        else{
          setTheSquad(playersToHire)
        }
    }
  }
  return (
    <button
      className="market-random-squad-button"
      onClick={handleAutoPick}
    >losowy skład
    </button>
  )
}

export default AutoPickButton;
