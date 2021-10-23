import React, { useState} from "react"
import players from "./Players";
import formations from "./formations.js"
import theSquad from "./theSquad";


const PlayersList = () => {

  const listOfPlayers = players.map((player) =>
  <li key = {player.id} className="market-player">
    <span className="second-name">{player.surname + ' ' + player.name.slice(0,1) + '.'} </span>
    <span className="position">{player.position.slice(0,1)} </span>
    <span className="club-name">{player.club.slice(0,3).toUpperCase()} </span>
    <button onClick={() => { hirePlayer(player.btnId, player.price) }} className="price-btn" id={player.btnId}>{player.price}h</button>
  </li>
  );

  const [market, setMarket] = useState(listOfPlayers.slice(0, 13))
  
  const handlePageToggle = (index1, index2) => {
    setMarket(listOfPlayers.slice(index1, index2))
  }
  

  return (
    <div>
      <div id="search">
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(0, 13)}}>1</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(13, 26)}}>2</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(26, 39)}}>3</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(39, 52)}}>4</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(52, 65)}}>5</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(65, 78)}}>6</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(78, 91)}}>7</button>
        {/* <button className="page-toggle-button" onClick={()=>{handlePageToggle(91, 104)}}>8</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(104, 117)}}>9</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(117, 130)}}>10</button>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(130, 143)}}>11</button> */}
      </div>
      <ul id="market-list">{market}</ul>
    </div> 
  )
}

let balance = 300;

let formationIndex = 0;

let ataCounter = 0;
let bolCounter = 0;
let cagCounter = 0;
let empCounter = 0;
let fioCounter = 0;
let genCounter = 0;
let helCounter = 0;
let intCounter = 0;
let juvCounter = 0;
let lazCounter = 0;
let milCounter = 0;
let napCounter = 0;
let romCounter = 0;
let salCounter = 0;
let samCounter = 0;
let sasCounter = 0;
let speCounter = 0;
let torCounter = 0;
let udiCounter = 0;
let venCounter = 0;

let goalkeepersCounter = 0;
let defendersCounter = 0;
let midfieldersCounter = 0;
let forwardsCounter = 0;

const hirePlayer = (btnId, price) => {

  let position = btnId.slice(-4,-3)
  let club = btnId.slice(-3)

  let canAfford = false;
  let withinClubLimit = false;
  let withinPositionLimit = false;

  let classNameToPass

  if(price <= balance){
      canAfford = true;
    }
  
    if(club==="Ata" && ataCounter < 15){
      withinClubLimit = true;
      classNameToPass = "player-bean-atalanta"
    }
    else if(club==="Bol" && bolCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-bologna"
    }
    else if(club==="Cag" && cagCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-cagliari"
    }
    else if(club==="Emp" && empCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-empoli"
    }
    else if(club==="Fio" && fioCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-fiorentina"
    }
    else if(club==="Gen" && genCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-genoa"
    }
    else if(club==="Hel" && helCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-hellas"
    }
    else if(club==="Int" && intCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-inter"
    }
    else if(club==="Juv" && juvCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-juventus"
    }
    else if(club==="Laz" && lazCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-lazio"
    }
    else if(club==="Mil" && milCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-milan"
    }
    else if(club==="Nap" && napCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-napoli"
    }
    else if(club==="Rom" && romCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-roma"
    }
    else if(club==="Sal" && salCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-salernitana"
    }
    else if(club==="Sam" && samCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-sampdoria"
    }
    else if(club==="Sas" && sasCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-sassuolo"
    }
    else if(club==="Spe" && speCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-spezia"
    }
    else if(club==="Tor" && torCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-torino"
    }
    else if(club === "Udi" && udiCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-udinese"
    }
    else if(club === "Ven" && venCounter < 3){
      withinClubLimit = true;
      classNameToPass = "player-bean-venezia"
    }
  
    if(position === "g" && goalkeepersCounter < 2){
      withinPositionLimit = true;
    }
    else if(position === "d" && defendersCounter < 5){
      withinPositionLimit = true;
    } 
    else if(position === "m" && midfieldersCounter < 5){
      withinPositionLimit = true;
    } 
    else if(position === "f" && forwardsCounter < 3){
      withinPositionLimit = true;
    } 

    if(canAfford && withinClubLimit && withinPositionLimit){
          balance = balance - price

          switch(position){
            case "g": goalkeepersCounter++;
              if(goalkeepersCounter === 1){
                assignDataToSquad(btnId, 0, classNameToPass)
              }
              else if(goalkeepersCounter === 2){
                assignDataToSquad(btnId, formations[formationIndex].gk2, classNameToPass)
              }
              break;
            case "d": defendersCounter++;
              if(defendersCounter === 1){
                assignDataToSquad(btnId, 1, classNameToPass)
              }
              else if(defendersCounter === 2){
                assignDataToSquad(btnId, 2, classNameToPass)
              }
              else if(defendersCounter === 3){
                assignDataToSquad(btnId, 3, classNameToPass)
              }
              else if(defendersCounter === 4){
                assignDataToSquad(btnId, formations[formationIndex].def4, classNameToPass)
              }
              else if(defendersCounter === 5){
                assignDataToSquad(btnId, formations[formationIndex].def5, classNameToPass)
              }
              break;
            case "m": midfieldersCounter++;
              if(midfieldersCounter === 1){
                assignDataToSquad(btnId, 6, classNameToPass)
              }
              else if(midfieldersCounter === 2){
                assignDataToSquad(btnId, 7, classNameToPass)
              }
              else if(midfieldersCounter === 3){
                assignDataToSquad(btnId, 8, classNameToPass)
              }
              else if(midfieldersCounter === 4, classNameToPass){
                assignDataToSquad(btnId, formations[formationIndex].mid4, classNameToPass)
              }
              else if(midfieldersCounter === 5){
                assignDataToSquad(btnId, formations[formationIndex].mid5, classNameToPass)
              }
              break;
            case "f": forwardsCounter++;
              if(forwardsCounter === 1){
                assignDataToSquad(btnId, 11, classNameToPass)
              }
              else if(forwardsCounter===2){
                assignDataToSquad(btnId, formations[formationIndex].fwd2, classNameToPass)
              }
              else if(forwardsCounter===3){
                assignDataToSquad(btnId, formations[formationIndex].fwd3, classNameToPass)
              }
              break;
          }
        }
        
}

const assignDataToSquad = (btnId, squadPositionIndex, classNameToPass) => {
  
  let marketIndex = parseInt(btnId.slice(-6,-4))
  let club = btnId.slice(-3)
  document.getElementById(btnId).disabled = true;
  
  switch(club){
    case "Ata": ataCounter++;
    break;
    case "Bol": bolCounter++;
    break;
    case "Cag": cagCounter++;
    break;
    case "Emp": empCounter++;
    break;
    case "Fio": fioCounter++;
    break;
    case "Gen": genCounter++;
    break;
    case "Hel": helCounter++;
    break;
    case "Int": intCounter++;
    break;
    case "Juv": juvCounter++;
    break;
    case "Laz": lazCounter++;
    break;
    case "Mil": milCounter++;
    break;
    case "Nap": napCounter++;
    break;
    case "Rom": romCounter++;
    break;
    case "Sal": salCounter++;
    break;
    case "Sam": samCounter++;
    break;
    case "Sas": sasCounter++;
    break;
    case "Tor": torCounter++;
    break;
    case "Udi": udiCounter++;
    break;
    case "Ven": venCounter++;
    break;
  }
  theSquad[squadPositionIndex].btnId = btnId
  theSquad[squadPositionIndex].className2 = classNameToPass
  theSquad[squadPositionIndex].className3 = "player-bean-hover"
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
  }

export default PlayersList