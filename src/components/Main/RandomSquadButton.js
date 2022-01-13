import React from "react"
import players from "./Players";
import formations from "./formations.js";

const RandomSquadButton = (props)=>{

    const {
        theSquad,
        clubTotalValue,
        formationIndex, 
        setBalance, 
        setTemporarySquad, 
        setDisabledButtons, 
        setBeansCounter, 
        positionCounters,
        clubCounterSetters } = props
    const {
        setAtaCounter,
        setBolCounter,
        setCagCounter,
        setEmpCounter,
        setFioCounter,
        setGenCounter,
        setHelCounter,
        setIntCounter,
        setJuvCounter,
        setLazCounter,
        setMilCounter,
        setNapCounter,
        setRomCounter,
        setSalCounter,
        setSamCounter,
        setSasCounter,
        setSpeCounter,
        setTorCounter,
        setUdiCounter,
        setVenCounter,
        } = clubCounterSetters
    const {
        goalkeepersCounter, setGoalkeepersCounter,
        defendersCounter, setDefendersCounter,
        midfieldersCounter, setMidfieldersCounter,
        forwardsCounter, setForwardsCounter
        } = positionCounters 

    const clearTheSquad = () => {
        for(let i = 0; i <= 17; i++){
            if(theSquad[i].className2 !== "extra-bean"){
                theSquad[i] = {
                    id: "",
                    pointSystemId: "",
                    btnId: "",
                    className1: "player-bean",
                    className2: "player-bean-blank",
                    className3: "",
                    className4: "",
                    name: "",
                    surname: "",
                    shirtNumber: "",
                    position: "",
                    club: "",
                    price: "",
                    overallPoints: "",
                    recentMatchdayPoints: "",
                }
            }
        }
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
        setGoalkeepersCounter(0)
        setDefendersCounter(0)
        setMidfieldersCounter(0)
        setForwardsCounter(0)
        setAtaCounter(0)
        setBolCounter(0)
        setCagCounter(0)
        setEmpCounter(0)
        setFioCounter(0)
        setGenCounter(0)
        setHelCounter(0)
        setIntCounter(0)
        setJuvCounter(0)
        setLazCounter(0)
        setMilCounter(0)
        setNapCounter(0)
        setRomCounter(0)
        setSalCounter(0)
        setSamCounter(0)
        setSasCounter(0)
        setSpeCounter(0)
        setTorCounter(0)
        setUdiCounter(0)
        setVenCounter(0)

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
                    if(tempAtaCounter < 3){ isWithinClubLimits =  true }
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
                setBalance(Math.round((clubTotalValue - moneySpent)*10)/10)
                setGoalkeepersCounter(2)
                setDefendersCounter(5)
                setMidfieldersCounter(5)
                setForwardsCounter(3)
                setBeansCounter(15)
                setDisabledButtons(buttonsToDisable)

                for (let i = 0; i <= 14; i++) {
                    let classNameToPass
                    let club = playersToHire[i].btnId.slice(-3)
                    let btnId = playersToHire[i].btnId
                    buttonsToDisable.push(btnId)

                    switch(club){
                        case "Ata": setAtaCounter(tempAtaCounter);
                        classNameToPass = "player-bean-atalanta"
                        break;
                        case "Bol": setBolCounter(tempBolCounter);
                        classNameToPass = "player-bean-bologna"
                        break;
                        case "Cag": setCagCounter(tempCagCounter);
                        classNameToPass = "player-bean-cagliari"
                        break;
                        case "Emp": setEmpCounter(tempEmpCounter);
                        classNameToPass = "player-bean-empoli"
                        break;
                        case "Fio": setFioCounter(tempFioCounter);
                        classNameToPass = "player-bean-fiorentina"
                        break;
                        case "Gen": setGenCounter(tempGenCounter);
                        classNameToPass = "player-bean-genoa"
                        break;
                        case "Hel":  setHelCounter(tempHelCounter);
                        classNameToPass = "player-bean-hellas"
                        break;
                        case "Int":  setIntCounter(tempIntCounter);
                        classNameToPass = "player-bean-inter"
                        break;
                        case "Juv":  setJuvCounter(tempJuvCounter);
                        classNameToPass = "player-bean-juventus"
                        break;
                        case "Laz":  setLazCounter(tempLazCounter);
                        classNameToPass = "player-bean-lazio"
                        break;
                        case "Mil":  setMilCounter(tempMilCounter);
                        classNameToPass = "player-bean-milan"
                        break;
                        case "Nap":  setNapCounter(tempNapCounter);
                        classNameToPass = "player-bean-napoli"
                        break;
                        case "Rom":  setRomCounter(tempRomCounter);
                        classNameToPass = "player-bean-roma"
                        break;
                        case "Sal":  setSalCounter(tempSalCounter);
                        classNameToPass = "player-bean-salernitana"
                        break;
                        case "Sam":  setSamCounter(tempSamCounter);
                        classNameToPass = "player-bean-sampdoria"
                        break;
                        case "Sas":  setSasCounter(tempSasCounter);
                        classNameToPass = "player-bean-sassuolo"
                        break;
                        case "Spe":  setSpeCounter(tempSpeCounter);
                        classNameToPass = "player-bean-spezia"
                        break;
                        case "Tor":  setTorCounter(tempTorCounter);
                        classNameToPass = "player-bean-torino"
                        break;
                        case "Udi":  setUdiCounter(tempUdiCounter);
                        classNameToPass = "player-bean-udinese"
                        break;
                        case "Ven":  setVenCounter(tempVenCounter);
                        classNameToPass = "player-bean-venezia"
                        break;
                        default: return
                      }
                    switch(playersToHire[i].position){
                        case "Gk":
                          if(theSquad[0].id === ""){
                            assignDataToSquad(btnId, 0, classNameToPass, theSquad)
                          }
                          else if(theSquad[14].id === ""){
                            assignDataToSquad(btnId, formations[formationIndex].gk2, classNameToPass, theSquad)
                          }
                          break;
                        case "Def":
                          if(theSquad[1].id === ""){
                            assignDataToSquad(btnId, 1, classNameToPass, theSquad)
                          }
                          else if(theSquad[2].id === ""){
                            assignDataToSquad(btnId, 2, classNameToPass, theSquad)
                          }
                          else if(theSquad[3].id === ""){
                            assignDataToSquad(btnId, 3, classNameToPass, theSquad)
                          }
                          else if(theSquad[formations[formationIndex].def4].id === ""){
                            assignDataToSquad(btnId, formations[formationIndex].def4, classNameToPass, theSquad)
                          }
                          else if(theSquad[formations[formationIndex].def5].id === ""){
                            assignDataToSquad(btnId, formations[formationIndex].def5, classNameToPass, theSquad)
                          }
                          break;
                        case "Mid":
                          if(theSquad[6].id === ""){
                            assignDataToSquad(btnId, 6, classNameToPass, theSquad)
                          }
                          else if(theSquad[7].id === ""){
                            assignDataToSquad(btnId, 7, classNameToPass, theSquad)
                          }
                          else if(theSquad[8].id === ""){
                            assignDataToSquad(btnId, 8, classNameToPass, theSquad)
                          }
                          else if(theSquad[formations[formationIndex].mid4].id === ""){
                            assignDataToSquad(btnId, formations[formationIndex].mid4, classNameToPass, theSquad)
                          }
                          else if(theSquad[formations[formationIndex].mid5].id === ""){
                            assignDataToSquad(btnId, formations[formationIndex].mid5, classNameToPass, theSquad)
                          }
                          break;
                        case "Fwd":
                          if(theSquad[11].id === ""){
                            assignDataToSquad(btnId, 11, classNameToPass, theSquad)
                          }
                          else if(theSquad[formations[formationIndex].fwd2].id === ""){
                            assignDataToSquad(btnId, formations[formationIndex].fwd2, classNameToPass, theSquad)
                          }
                          else if(theSquad[formations[formationIndex].fwd3].id === ""){
                            assignDataToSquad(btnId, formations[formationIndex].fwd3, classNameToPass, theSquad)
                          }
                          break;
                        default: return
                    }
                }
            }
        }
    }
    
    const assignDataToSquad = (
        btnId, 
        squadPositionIndex, 
        classNameToPass, 
        theSquad
        ) => {
        let marketIndex = parseInt(btnId.slice(-7,-4))
        
        theSquad[squadPositionIndex].btnId = btnId
        theSquad[squadPositionIndex].className2 = classNameToPass
        theSquad[squadPositionIndex].className3 = "hoverable"
        theSquad[squadPositionIndex].id = players[marketIndex].id
        theSquad[squadPositionIndex].pointSystemId = players[marketIndex].pointSystemId
        theSquad[squadPositionIndex].name = players[marketIndex].name
        theSquad[squadPositionIndex].surname = players[marketIndex].surname
        theSquad[squadPositionIndex].shirtNumber = players[marketIndex].shirtNumber
        theSquad[squadPositionIndex].position = players[marketIndex].position
        theSquad[squadPositionIndex].club = players[marketIndex].club
        theSquad[squadPositionIndex].price = players[marketIndex].price
        theSquad[squadPositionIndex].overallPoints = players[marketIndex].overallPoints
        theSquad[squadPositionIndex].recentMatchdayPoints = players[marketIndex].recentMatchdayPoints

        setTemporarySquad([...theSquad])
    }

    return (
            <button
                className="market-random-squad-button"
                onClick={()=>handleRandomSquad(clearTheSquad())}>losowy skład
            </button>
    )
}

export default RandomSquadButton
