import React from "react"
import players from "./Players";

const RandomSquadButton = (props)=>{

    const {
        theSquad,
        clubTotalValue,
        setTheSquad, 
        setDisabledButtons
        } = props

    const clearTheSquad = () => {
        theSquad.goalkeepers = []
        theSquad.defenders = []
        theSquad.midfielders = []
        theSquad.forwards = []
        return theSquad
    }
    const handleRandomSquad = (theSquad) => {
        let totalPlayersNeededNumber = 15
        let goalkeepersNeededNumber = 2
        let defendersNeededNumber = 5
        let midfieldersNeededNumber = 5
        let forwardsNeededNumber = 3
        let averageBudgetPerPlayer = 0
        let moneySpent = 0
        
        const goalkeepers = players.filter(player => player.position === "Gk")
        
        let positionArray
        let buttonsToDisable = []
        let newPlayer
        let playersToHire = {
            goalkeepers: [],
            defenders: [],
            midfielders: [],
            forwards: [],
        }

        const isWithinLimits = (player) => {
            let isWithinClubLimits = false;
            let isOnNeededPosition = false;
            
            if(buttonsToDisable.filter(singleButton => singleButton.club === player.btnId.club).length < 3){
                isWithinClubLimits = true;
            }

            switch(player.position){
                case "Gk": if(playersToHire.goalkeepers.length < 2){ 
                    isOnNeededPosition = true 
                    positionArray = playersToHire.goalkeepers
                    }
                    break;
                case "Def": if(playersToHire.defenders.length < 5){ 
                    isOnNeededPosition = true
                    positionArray = playersToHire.defenders
                    }
                    break;
                case "Mid": if(playersToHire.midfielders.length < 5){ 
                    isOnNeededPosition = true 
                    positionArray = playersToHire.midfielders
                    }
                    break;
                case "Fwd": if(playersToHire.forwards.length < 3){ 
                    isOnNeededPosition = true 
                    positionArray = playersToHire.forwards
                    }
                    break;
                default:
                    break;
            }
            if(isWithinClubLimits && isOnNeededPosition && !positionArray.includes(player)){
                buttonsToDisable.push(player.btnId)
                return true
            }
        }
//                                  ZATRUDNIANIE JEDNEJ "GWIAZDY"
        newPlayer = players.filter(player => player.price >= 19)[Math.floor(Math.random()*players.filter(player => player.price >= 19).length)]
        if(isWithinLimits(newPlayer)){
            moneySpent = moneySpent + newPlayer.price
            positionArray.push(newPlayer)
            totalPlayersNeededNumber--
        }
//                                  ZATRUDNIANIE BRAMKARZY
    while(totalPlayersNeededNumber > 12){
        newPlayer = goalkeepers[Math.floor(Math.random()*goalkeepers.length)]
        if(isWithinLimits(newPlayer)){
            moneySpent = moneySpent + newPlayer.price
            positionArray.push(newPlayer)
            totalPlayersNeededNumber--
        }
    }
//                              ZATRUDNIANIE OŚMIU LOSOWYCH PIŁKARZY
        while(totalPlayersNeededNumber > 4){         
            newPlayer = players[Math.floor(Math.random()*players.length)]
            if(isWithinLimits(newPlayer)){
                moneySpent = moneySpent + newPlayer.price
                positionArray.push(newPlayer)
                totalPlayersNeededNumber--
            }
        }
//                           ZATRUDNIANIE PIŁKARZY ZALEŻNIE OD BUDŻETU

        averageBudgetPerPlayer = Math.round(((clubTotalValue - moneySpent) / 4)*10)/10
        let infiniteLoopPrevention = 0
        while(totalPlayersNeededNumber > 1 && infiniteLoopPrevention < 500){
            newPlayer = players.filter(player => player.price >= averageBudgetPerPlayer - 1 && player.price <= averageBudgetPerPlayer + 1)[Math.floor(Math.random()*players.filter(player => player.price >= averageBudgetPerPlayer - 1 && player.price <= averageBudgetPerPlayer + 1).length)]
            if(isWithinLimits(newPlayer)){
                moneySpent = moneySpent + newPlayer.price
                positionArray.push(newPlayer)
                totalPlayersNeededNumber--
            }
            infiniteLoopPrevention++
        }
        if(totalPlayersNeededNumber !== 1){
            handleRandomSquad(clearTheSquad())
        }

//                      ZATRUDNIANIE OSTATNIEGO PIŁKARZA - NAJDROŻSZEGO NA KTÓREGO STAĆ UŻYTKOWNIKA
        if((clubTotalValue - moneySpent) < 5 || (clubTotalValue - moneySpent) > 22){
            handleRandomSquad(clearTheSquad())
        }
        else{
            infiniteLoopPrevention = 0
            while(totalPlayersNeededNumber > 0 && infiniteLoopPrevention < 500){
                const mostExpensiveAffordablePlayers = players.filter(player => 
                    player.price >= clubTotalValue - moneySpent -1 && 
                    player.price <= clubTotalValue - moneySpent)
                newPlayer = mostExpensiveAffordablePlayers[Math.floor(Math.random()*mostExpensiveAffordablePlayers.length)]

                if(isWithinLimits(newPlayer)){
                    moneySpent = moneySpent + newPlayer.price
                    positionArray.push(newPlayer)
                    totalPlayersNeededNumber--
                }
                infiniteLoopPrevention++
            }
            if(totalPlayersNeededNumber !== 0){
                handleRandomSquad(clearTheSquad())
            }

            // ZATRUDNIANIE 
           
            else{
                setDisabledButtons(buttonsToDisable)
                setTheSquad(playersToHire)
            }
        }
    }

    return (
            <button
                className="market-random-squad-button"
                onClick={()=>handleRandomSquad(clearTheSquad())}>losowy skład
            </button>
    )
}

export default RandomSquadButton
