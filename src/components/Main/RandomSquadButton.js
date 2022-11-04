import React from "react";
import players from "./Players";
import {checkPositionLimit} from "./utilities.js";
import {findFirstFreeRole} from "./utilities.js";

const RandomSquadButton = (props)=>{

    //this component hires the squad of 15 unique random players, but with restrictions: 
    //    max 3 players per club, 
    //    exactly 2 goalkeepers, 5 defensors, 5 midfielders and 3 forwards
    //    total value of players must not be less than user's budget - 1 but within the budget
    //    the squad must contain at least "star" - one of the most expensive players

    const {
        clubTotalValue,
        setTheSquad, 
        positionLimits,
        playersPerClubLimit,
        roles,
        } = props;
    
    const handleRandomSquad = () => {

        let averageBudgetPerPlayer = 0;
        let moneySpent = 0;
        
        let newPlayer;
        let playersToHire = [];
        const isWithinLimits = (player) => {
            if(playersToHire.includes(player))
                return false;
            if(playersToHire.filter(singlePlayer => singlePlayer.playerData.club === player.club).length >= playersPerClubLimit)
                return false;
            if(!checkPositionLimit(player, playersToHire, positionLimits))
                return false;
            let firstFreeRole = findFirstFreeRole(roles, player, playersToHire);
            playersToHire.push({
                role: firstFreeRole,
                playerData: player
              })
            return true;
        }

        let stars = players.filter(player => player.price >= 19)                         //hiring 1 "star"
        newPlayer = stars[Math.floor(Math.random()*stars.length)]
        if(isWithinLimits(newPlayer))
            moneySpent = moneySpent + newPlayer.price;
        
        const goalkeepers = players.filter(player => player.position === "g");

        while(playersToHire.length < 3){                                                  //hiring 2 goalkeepers
            newPlayer = goalkeepers[Math.floor(Math.random()*goalkeepers.length)]
            if(isWithinLimits(newPlayer))
                moneySpent = moneySpent + newPlayer.price;
        }
        while(playersToHire.length < 11){                                                 //hiring 8 random players
            newPlayer = players[Math.floor(Math.random()*players.length)]
            if(isWithinLimits(newPlayer))
                moneySpent = moneySpent + newPlayer.price;
        }
        averageBudgetPerPlayer = Math.round(((clubTotalValue - moneySpent) / 4)*10)/10    //hiring 4 players depending on budget
        let infiniteLoopPrevention = 0;
        while(playersToHire.length < 14 && infiniteLoopPrevention < 500){
            const playersOfAverageValue = players.filter(player => 
                player.price >= averageBudgetPerPlayer - 1 && 
                player.price <= averageBudgetPerPlayer + 1)
            newPlayer = playersOfAverageValue[Math.floor(Math.random()*playersOfAverageValue.length)]
            if (isWithinLimits(newPlayer)){
                moneySpent = moneySpent + newPlayer.price
            }
            infiniteLoopPrevention++;
        }
        if(playersToHire.length !== 14)
            handleRandomSquad();
        if((clubTotalValue - moneySpent) < 5 || (clubTotalValue - moneySpent) > 22)       //hiring last player - the most expensive that user can afford
            handleRandomSquad();
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
            if(playersToHire.length !== 15)
                handleRandomSquad()
            else
                setTheSquad(playersToHire)
        }
    }
    return (
            <button
                className="market-random-squad-button"
                onClick={()=>handleRandomSquad()}>losowy skład
            </button>
    )
}

export default RandomSquadButton
