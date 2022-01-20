import React from "react"
import players from "./Players";

const RandomSquadButton = (props)=>{

    const {
        theSquad,
        clubTotalValue,
        setBalance,
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
        
        let playersToHire = []
        let buttonsToDisable = []

        let newPlayer
        let tempAtaCounter = 0
        let tempBolCounter = 0
        let tempCagCounter = 0
        let tempEmpCounter = 0
        let tempFioCounter = 0
        let tempGenCounter = 0
        let tempHelCounter = 0
        let tempIntCounter = 0
        let tempJuvCounter = 0
        let tempLazCounter = 0
        let tempMilCounter = 0
        let tempNapCounter = 0
        let tempRomCounter = 0
        let tempSalCounter = 0
        let tempSamCounter = 0
        let tempSasCounter = 0
        let tempSpeCounter = 0
        let tempTorCounter = 0
        let tempUdiCounter = 0
        let tempVenCounter = 0

        const updateLimits = (player) => {
            switch(player.club){
                case "Atalanta": tempAtaCounter++
                    break;
                case "Bologna": tempBolCounter++
                    break;
                case "Cagliari": tempCagCounter++
                    break;
                case "Empoli": tempEmpCounter++
                    break;
                case "Fiorentina": tempFioCounter++
                    break;
                case "Genoa": tempGenCounter++
                    break;
                case "Hellas": tempHelCounter++
                    break;
                case "Inter": tempIntCounter++
                    break;
                case "Juventus": tempJuvCounter++
                    break;
                case "Lazio": tempLazCounter++
                    break;
                case "Milan": tempMilCounter++
                    break;
                case "Napoli": tempNapCounter++
                    break;
                case "Roma": tempRomCounter++
                    break;
                case "Salernitana": tempSalCounter++
                    break;
                case "Sampdoria": tempSamCounter++
                    break;
                case "Sassuolo": tempSasCounter++
                    break;
                case "Spezia": tempSpeCounter++
                    break;
                case "Torino": tempTorCounter++
                    break;
                case "Udinese": tempUdiCounter++
                    break;
                case "Venezia": tempVenCounter++
                    break;
                default:
                    break;
            }
            switch(player.position){
                case "Gk": goalkeepersNeededNumber--
                    break;
                case "Def": defendersNeededNumber--
                    break;
                case "Mid": midfieldersNeededNumber--
                    break;
                case "Fwd": forwardsNeededNumber--
                    break;
                default:
                    break;
            }
        }
        const isWithinLimits = (player) => {
            let isWithinClubLimits = false;
            let isOnNeededPosition = false;
            switch(player.club){
                case "Atalanta" :
                    if(tempAtaCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Bologna" :
                    if(tempBolCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Cagliari" :
                    if(tempCagCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Empoli" :
                    if(tempEmpCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Fiorentina" :
                    if(tempFioCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Genoa" :
                    if(tempGenCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Hellas" :
                    if(tempHelCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Inter" :
                    if(tempIntCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Juventus" :
                    if(tempJuvCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Lazio" :
                    if(tempLazCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Milan" :
                    if(tempMilCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Napoli" :
                    if(tempNapCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Roma" :
                    if(tempRomCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Salernitana" :
                    if(tempSalCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Sampdoria" :
                    if(tempSamCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Sassuolo" :
                    if(tempSasCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Spezia" :
                    if(tempSpeCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Torino" :
                    if(tempTorCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Udinese" :
                    if(tempUdiCounter < 3){ isWithinClubLimits = true }
                    break;
                case "Venezia" :
                    if(tempVenCounter < 3){ isWithinClubLimits = true }
                    break;
                default:
                    break;
            }
            switch(player.position){
                case "Gk": if(goalkeepersNeededNumber > 0){ 
                    isOnNeededPosition = true 
                    }
                    break;
                case "Def": if(defendersNeededNumber > 0){ 
                    isOnNeededPosition = true
                    }
                    break;
                case "Mid": if(midfieldersNeededNumber > 0){ 
                    isOnNeededPosition = true 
                    }
                    break;
                case "Fwd": if(forwardsNeededNumber > 0){ 
                    isOnNeededPosition = true 
                    }
                    break;
                default:
                    break;
            }
            if(isWithinClubLimits && isOnNeededPosition && !playersToHire.includes(player)){
                return true
            }
        }
//                                  ZATRUDNIANIE JEDNEJ "GWIAZDY"
        newPlayer = players.filter(player => player.price >= 19)[Math.floor(Math.random()*players.filter(player => player.price >= 19).length)]
        if(isWithinLimits(newPlayer)){
            updateLimits(newPlayer)
            moneySpent = moneySpent + newPlayer.price
            playersToHire.push(newPlayer)
            totalPlayersNeededNumber--
        }
//                                  ZATRUDNIANIE BRAMKARZY
    while(totalPlayersNeededNumber > 12){
        newPlayer = goalkeepers[Math.floor(Math.random()*goalkeepers.length)]
        if(isWithinLimits(newPlayer)){
            updateLimits(newPlayer)
            moneySpent = moneySpent + newPlayer.price
            playersToHire.push(newPlayer)
            totalPlayersNeededNumber--
        }
    }
//                              ZATRUDNIANIE OŚMIU LOSOWYCH PIŁKARZY
        while(totalPlayersNeededNumber > 4){         
            newPlayer = players[Math.floor(Math.random()*players.length)]
            if(isWithinLimits(newPlayer)){
                updateLimits(newPlayer)
                moneySpent = moneySpent + newPlayer.price
                playersToHire.push(newPlayer)
                totalPlayersNeededNumber--
            }
        }
//                           ZATRUDNIANIE PIŁKARZY ZALEŻNIE OD BUDŻETU

        averageBudgetPerPlayer = Math.round(((clubTotalValue - moneySpent) / 4)*10)/10
        let infiniteLoopPrevention = 0
        while(totalPlayersNeededNumber > 1 && infiniteLoopPrevention < 500){
            newPlayer = players.filter(player => player.price >= averageBudgetPerPlayer - 1 && player.price <= averageBudgetPerPlayer + 1)[Math.floor(Math.random()*players.filter(player => player.price >= averageBudgetPerPlayer - 1 && player.price <= averageBudgetPerPlayer + 1).length)]
            if(isWithinLimits(newPlayer)){
                updateLimits(newPlayer)
                moneySpent = moneySpent + newPlayer.price
                playersToHire.push(newPlayer)
                totalPlayersNeededNumber--
            }
            infiniteLoopPrevention++
        }
        if(playersToHire.length !== 14){
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
                    updateLimits(newPlayer)
                    moneySpent = moneySpent + newPlayer.price
                    playersToHire.push(newPlayer)
                    totalPlayersNeededNumber--
                }
                infiniteLoopPrevention++
            }
            if(playersToHire.length !== 15){
                handleRandomSquad(clearTheSquad())
            }

            // ZATRUDNIANIE 
           
            else{

                for (let i = 0; i <= 14; i++) {
                    let btnId = playersToHire[i].btnId
                    buttonsToDisable.push(btnId)
                    
                    const player = {
                      id: playersToHire[i].id,
                      pointSystemId: playersToHire[i].pointSystemId, 
                      btnId: btnId,
                      className1: "player-bean",
                      className2: "player-bean-" + btnId.club.toLowerCase(),
                      className3: "hoverable",
                      className4: "",
                      name: playersToHire[i].name,
                      surname: playersToHire[i].surname, 
                      shirtNumber: playersToHire[i].shirtNumber, 
                      position: playersToHire[i].position, 
                      club: playersToHire[i].club, 
                      price: playersToHire[i].price,
                      overallPoints: playersToHire[i].overallPoints,
                      recentMatchdayPoints: playersToHire[i].recentMatchdayPoints,
                    }
                    switch(btnId.position){
                      case "g": theSquad.goalkeepers.push(player)
                      break;
                      case "d": theSquad.defenders.push(player)
                      break;
                      case "m": theSquad.midfielders.push(player)
                      break;
                      case "f": theSquad.forwards.push(player)
                      break;
                    }
                }
                setBalance(Math.round((clubTotalValue - moneySpent)*10)/10)
                setDisabledButtons(buttonsToDisable)
                setTheSquad(theSquad)
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
