import React, { useState } from "react";
import "./styles/style.css";

import PlayerBean from "./PlayerBean.js";
import Market from "./Market.js";
import FormationButton from "./FormationButton.js";
import {theSquadInitial} from "./theSquad.js";
import Schedule from "./Schedule.js";
import TeamName from "./TeamName.js";
import StatsChart from "./StatsChart";

function Main(){
  const [theSquad, setTheSquad] = useState(theSquadInitial);
  const [formationIndex, setFormationIndex] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [balance, setBalance] = useState(170);
  const [clubTotalValue, setClubTotalValue] = useState(170);
  const [playerToSwitchIndex, setPlayerToSwitchIndex] = useState(0);
  const [beansCounter, setBeansCounter] = useState(0);
  const [matchdayIndex, setMatchdayIndex] = useState(0);
  const [teamname, setTeamName] = useState("FC Team");
  const [renameActive, setRenameActive] = useState(false);
  const [statsToShowIndex, setStatsToShowIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const matchdaysPlayed = 0;
  const [teamDataID, setTeamDataID] = useState("teamdata");
  const [formation, setFormation] = useState([
          0,
          2,
          3,
          4,
          5,
          "extraBean",
          7,
          8,
          9,
          10,
          "extraBean",
          12,
          13,
          "extraBean",
          1,
          6,
          11,
          14
  ]);
  const [ataCounter, setAtaCounter] = useState(0);
  const [bolCounter, setBolCounter] = useState(0);
  const [cagCounter, setCagCounter] = useState(0);
  const [empCounter, setEmpCounter] = useState(0);
  const [fioCounter, setFioCounter] = useState(0);
  const [genCounter, setGenCounter] = useState(0);
  const [helCounter, setHelCounter] = useState(0);
  const [intCounter, setIntCounter] = useState(0);
  const [juvCounter, setJuvCounter] = useState(0);
  const [lazCounter, setLazCounter] = useState(0);
  const [milCounter, setMilCounter] = useState(0);
  const [napCounter, setNapCounter] = useState(0);
  const [romCounter, setRomCounter] = useState(0);
  const [salCounter, setSalCounter] = useState(0);
  const [samCounter, setSamCounter] = useState(0);
  const [sasCounter, setSasCounter] = useState(0);
  const [speCounter, setSpeCounter] = useState(0);
  const [torCounter, setTorCounter] = useState(0);
  const [udiCounter, setUdiCounter] = useState(0);
  const [venCounter, setVenCounter] = useState(0);

  const [goalkeepersCounter, setGoalkeepersCounter] = useState(0);
  const [defendersCounter, setDefendersCounter] = useState(0);
  const [midfieldersCounter, setMidfieldersCounter] = useState(0);
  const [forwardsCounter, setForwardsCounter] = useState(0);
  
  const clubCounters = {
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
    venCounter};

    const clubCounterSetters = {
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
    };
  const positionCounters = {
    goalkeepersCounter, setGoalkeepersCounter,
    defendersCounter, setDefendersCounter,
    midfieldersCounter, setMidfieldersCounter,
    forwardsCounter, setForwardsCounter
  };
  const playerBeanProps = {
    theSquad,
    disabledButtons,
    setDisabledButtons,
    balance,
    setBalance,
    clubCounters,
    clubCounterSetters,
    setTheSquad,
    positionCounters,
    playerToSwitchIndex,
    setPlayerToSwitchIndex,
    setBeansCounter,
    beansCounter,
    setStatsToShowIndex,
    setShowStats,
  };
  return (
    <div id="main-grid">
      {showStats && <StatsChart 
        statsToShowIndex={statsToShowIndex}
        matchdaysPlayed={matchdaysPlayed}
        setShowStats={setShowStats}/>}
      <div id="menu-img-container">
        <div id="menu">
          <h1 id="main-title">FANTASY BEANS</h1>
        </div>
      </div>
      <div id="pitch-img-container">
        <div id={teamDataID}>
          {window.addEventListener('scroll', ()=>{
            const scrolled = window.scrollY;
            if (scrolled > 200){
              setTeamDataID("teamdata-scrolled")
            }
            else{
              setTeamDataID("teamdata")
            }
          })}
          <h5 id="teamdata-teamname-info">Zespół:</h5>
          <h5 id="teamdata-balance-status-info">Stan konta/wartość klubu:</h5>
          <TeamName 
            teamname= {teamname}
            setTeamName= {setTeamName}
            renameActive= {renameActive}
            setRenameActive= {setRenameActive}/>
          <h2 id="teamdata-balance-status">{balance}/{clubTotalValue}K</h2>
          <button 
            id="teamdata-save-button"
            disabled={beansCounter !== 15 && true}>Zapisz</button>
          <div id="teamdata-formations">
            <FormationButton
              id={"formation-button-first"}
              setFormation={setFormation}
              formationName={"4-4-2"}
              newFormationIndex={0}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              setFormation={setFormation}
              formationName={"4-3-3"}
              newFormationIndex={1}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              setFormation={setFormation}
              formationName={"4-5-1"}
              newFormationIndex={2}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              setFormation={setFormation}
              formationName={"5-4-1"}
              newFormationIndex={3}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              setFormation={setFormation}
              formationName={"5-3-2"}
              newFormationIndex={4}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              setFormation={setFormation}
              formationName={"3-5-2"}
              newFormationIndex={5}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={"formation-button-last"}
              setFormation={setFormation}
              formationName={"3-4-3"}
              newFormationIndex={6}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
          </div>
        </div>
        <div id="pitch">
          <div id="pitch-line-gk">
            <PlayerBean
              squadIndex={formation[0]}
              playerBeanProps = {playerBeanProps}
              />
          </div>
          <div id="pitch-line-def">
            <PlayerBean
              squadIndex={formation[1]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[2]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[3]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[4]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[5]}
              playerBeanProps = {playerBeanProps}
            />
          </div>
          <div id="pitch-line-mid">
            <PlayerBean
              squadIndex={formation[6]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[7]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[8]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[9]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[10]}
              playerBeanProps = {playerBeanProps}
            />
          </div>
          <div id="pitch-line-fwd">
            <PlayerBean
              squadIndex={formation[11]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[12]}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              squadIndex={formation[13]}
              playerBeanProps = {playerBeanProps}
            />
          </div>
        </div>
          <Market
            id={"market-wide-screen"}
            setTheSquad={setTheSquad}
            theSquad={theSquad}
            disabledButtons={disabledButtons} 
            setDisabledButtons={(data) => setDisabledButtons(data)}
            balance = {balance}
            setBalance = {setBalance}
            clubCounters = {clubCounters}
            positionCounters = {positionCounters}
            clubCounterSetters = {clubCounterSetters}
            setBeansCounter = {setBeansCounter}
            beansCounter = {beansCounter}
            clubTotalValue ={clubTotalValue}
            setStatsToShowIndex={setStatsToShowIndex}
            setShowStats={setShowStats}
          />
        <Schedule
          id={"schedule-wide-screen"}    
          matchdayIndex={matchdayIndex}
          setMatchdayIndex={setMatchdayIndex}/>
      </div>
      <div id="bench-img-container">
        <div id="bench-gradient-container">
          <div id="bench">
                <PlayerBean
                  squadIndex={formation[14]}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  squadIndex={formation[15]}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  squadIndex={formation[16]}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  squadIndex={formation[17]}
                  playerBeanProps = {playerBeanProps}
                />
          </div>
        </div>
      </div>
      <div id="small-screen-background-container">
        <Market
          id={"market-small-screen"}
          theSquad={theSquad}
          disabledButtons={disabledButtons} 
          setDisabledButtons={(data) => setDisabledButtons(data)}
          balance = {balance}
          setBalance = {setBalance}
          clubCounters = {clubCounters}
          clubCounterSetters = {clubCounterSetters}
          positionCounters = {positionCounters}
          setBeansCounter = {setBeansCounter}
          beansCounter = {beansCounter}
          clubTotalValue ={clubTotalValue}
          setStatsToShowIndex={setStatsToShowIndex}
          setShowStats={setShowStats}
        />
        <Schedule 
          id={"schedule-small-screen"}
          matchdayIndex={matchdayIndex}
          setMatchdayIndex={setMatchdayIndex}
        />
      </div>
    </div>
  );
}

export default Main;
