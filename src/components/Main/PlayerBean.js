import React from "react";
import recycle2 from "./images/recycle2.png";
import recycle from "./images/recycle.png";
import eliminate from "./images/eliminate.png";


export const PlayerBean = (props) => {
  const {theSquad,
    squadIndex,
    disabledButtons,
    setDisabledButtons,
    balance,
    setBalance,
    clubCounters, 
    clubCounterSetters,
    setTemporarySquad,
    positionCounters,
    playerToSwitchIndex,
    setPlayerToSwitchIndex,
    setBeansCounter,
    beansCounter,
    setStatsToShowIndex,
    setShowStats,
    showStats
  } = props;
  const {
    ataCounter,
    bolCounter,
    cagCounter,
    empCounter,
    fioCounter,
    genCounter,
    helCounter,
    intCounter,
    juvCounter,
    lazCounter,
    milCounter,
    napCounter,
    romCounter,
    salCounter,
    samCounter,
    sasCounter,
    speCounter,
    torCounter,
    udiCounter,
    venCounter
  } = clubCounters
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


  const eliminatePlayer = () => {
    
    switch(theSquad[squadIndex].btnId.slice(-3)){
      case "Ata": setAtaCounter(ataCounter-1);
      break;
      case "Bol": setBolCounter(bolCounter-1);
      break;
      case "Cag": setCagCounter(cagCounter-1);
      break;
      case "Emp": setEmpCounter(empCounter-1);
      break;
      case "Fio": setFioCounter(fioCounter-1);
      break;
      case "Gen": setGenCounter(genCounter-1);
      break;
      case "Hel": setHelCounter(helCounter-1);
      break;
      case "Int": setIntCounter(intCounter-1);
      break;
      case "Juv": setJuvCounter(juvCounter-1);
      break;
      case "Laz": setLazCounter(lazCounter-1);
      break;
      case "Mil": setMilCounter(milCounter-1);
      break;
      case "Nap": setNapCounter(napCounter-1);
      break;
      case "Rom": setRomCounter(romCounter-1);
      break;
      case "Sal": setSalCounter(salCounter-1);
      break;
      case "Sam": setSamCounter(samCounter-1);
      break;
      case "Sas": setSasCounter(sasCounter-1);
      break;
      case "Spe": setSpeCounter(speCounter-1);
      break;
      case "Tor": setTorCounter(torCounter-1);
      break;
      case "Udi": setUdiCounter(udiCounter-1);
      break;
      case "Ven": setVenCounter(venCounter-1);
      break;
      default: return
    }
    
    let newDisabledButtons = disabledButtons.filter(button => button !== theSquad[squadIndex].btnId)
    let newBalance = balance + theSquad[squadIndex].price
    
    switch(theSquad[squadIndex].position){
      case "Gk": setGoalkeepersCounter(goalkeepersCounter-1);
      break;
      case "Def": setDefendersCounter(defendersCounter-1);
      break;
      case "Mid": setMidfieldersCounter(midfieldersCounter-1);
      break;
      case "Fwd": setForwardsCounter(forwardsCounter-1);
      break;
      default: return
    }
    theSquad[squadIndex] = {
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
    };
    setBeansCounter(beansCounter - 1)
    setBalance(Math.round(newBalance *10)/10)
    setDisabledButtons(newDisabledButtons)
    setTemporarySquad([...theSquad])
  };

  const prepareToSwitch = () => {
    for(let i = 0; i <= 17; i++){
      if(theSquad[i].position === theSquad[squadIndex].position){
        theSquad[i].className3 = "switchable"
      }
      else if(theSquad[i].position !== theSquad[squadIndex].position || theSquad[i].position !== ""){
        theSquad[i].className3 = "faded"
      }
    }
    setPlayerToSwitchIndex(squadIndex)
    setTemporarySquad([...theSquad])
  }
  const switchPlayers = () => {

    let temporarySlot = theSquad[playerToSwitchIndex]
    theSquad[playerToSwitchIndex] = theSquad[squadIndex]
    theSquad[squadIndex] = temporarySlot
    
    for(let i = 0; i <= 17; i++){
      if(theSquad[i].btnId !== ""){
        theSquad[i].className3 = "hoverable"
      }
      else{
        theSquad[i].className3 = ""
      }
    }
    setTemporarySquad([...theSquad])
  }
  const inRange = (numberToCheck, min, max) => {
    return numberToCheck >= min && numberToCheck <= max;
  }
  const handleStats = ()=>{
    setStatsToShowIndex(parseInt(theSquad[squadIndex].btnId.slice(-7,-4)))
    setShowStats(true)
  }

  return (
    <div
      className={
        theSquad[squadIndex].className1 + " " +
        theSquad[squadIndex].className2 + " " +
        theSquad[squadIndex].className3 + " " +
        theSquad[squadIndex].className4
      }>
      <span
        className="player-bean-surname"
        style={inRange(theSquad[squadIndex].surname.length, 0, 4) ? {fontSize: ".95em"} : 
              inRange(theSquad[squadIndex].surname.length, 5, 7) ? {fontSize: ".85em"} : 
              {fontSize: ".65em"}}>
        {theSquad[squadIndex].surname}
      </span>
      <span
        className="player-bean-number">
        {theSquad[squadIndex].shirtNumber}
      </span>
      <span 
        className="player-bean-points">
        {theSquad[squadIndex].overallPoints !== "" ? + theSquad[squadIndex].overallPoints + "p" : ""}
      </span>
      <span 
        className="player-bean-price">
        {theSquad[squadIndex].price !== "" ? theSquad[squadIndex].price + "K" : ""}
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
};

export default PlayerBean;
