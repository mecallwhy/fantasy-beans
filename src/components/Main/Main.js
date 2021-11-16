import React, { useState } from "react";
import "./style.css"

import PlayerBean from "./PlayerBean.js";
import Market from "./Market.js";
import FormationButton from "./FormationButton.js";
import theSquadInitial from "./theSquad";
import Schedule from "./Schedule.js";
import TeamName from "./TeamName.js";
import StatsChart from "./StatsChart";

function Main(){
  const [theSquad, setTheSquad] = useState(theSquadInitial);
  const [formationIndex, setFormationIndex] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState([])
  const [balance, setBalance] = useState(170)
  const [clubTotalValue, setClubTotalValue] = useState(170)
  const [temporarySquad, setTemporarySquad] = useState(theSquad)
  const [playerToSwitchIndex, setPlayerToSwitchIndex] = useState(0)
  const [beansCounter, setBeansCounter] = useState(0)
  const [matchdayIndex, setMatchdayIndex] = useState(0)
  const [teamname, setTeamName] = useState("FC Team")
  const [renameActive, setRenameActive] = useState(false)
  const [statsToShowIndex, setStatsToShowIndex] = useState(0)
  const [showStats, setShowStats] = useState(false)
  const matchdaysPlayed = 0

  const [ataCounter, setAtaCounter] = useState(0)
  const [bolCounter, setBolCounter] = useState(0)
  const [cagCounter, setCagCounter] = useState(0)
  const [empCounter, setEmpCounter] = useState(0)
  const [fioCounter, setFioCounter] = useState(0)
  const [genCounter, setGenCounter] = useState(0)
  const [helCounter, setHelCounter] = useState(0)
  const [intCounter, setIntCounter] = useState(0)
  const [juvCounter, setJuvCounter] = useState(0)
  const [lazCounter, setLazCounter] = useState(0)
  const [milCounter, setMilCounter] = useState(0)
  const [napCounter, setNapCounter] = useState(0)
  const [romCounter, setRomCounter] = useState(0)
  const [salCounter, setSalCounter] = useState(0)
  const [samCounter, setSamCounter] = useState(0)
  const [sasCounter, setSasCounter] = useState(0)
  const [speCounter, setSpeCounter] = useState(0)
  const [torCounter, setTorCounter] = useState(0)
  const [udiCounter, setUdiCounter] = useState(0)
  const [venCounter, setVenCounter] = useState(0)

  const [goalkeepersCounter, setGoalkeepersCounter] = useState(0)
  const [defendersCounter, setDefendersCounter] = useState(0)
  const [midfieldersCounter, setMidfieldersCounter] = useState(0)
  const [forwardsCounter, setForwardsCounter] = useState(0)
  
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
    venCounter}

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
    }
  const positionCounters = {
    goalkeepersCounter, setGoalkeepersCounter,
    defendersCounter, setDefendersCounter,
    midfieldersCounter, setMidfieldersCounter,
    forwardsCounter, setForwardsCounter
  }
  return (
    <div id="main-grid">
      {showStats && <StatsChart 
        statsToShowIndex={statsToShowIndex}
        matchdaysPlayed={matchdaysPlayed}
        setShowStats={setShowStats}/>}
      <div id="menu-img-container">
        <div id="menu">
          <h1 id="main-title">FANTASY BEANS</h1>
          {/* <h2 className="main-button" id="main-button1">ZESPÓŁ</h2>   //Uzupełnić po dodaniu backendu
          <h2 className="main-button" id="main-button2">LIGI</h2>
          <h2 className="main-button" id="main-button3">STATYSTYKI</h2> */}
        </div>
      </div>
      <div id="pitch-img-container">
        <div id="teamdata">
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
              theSquad={theSquad}
              formationIndex={formationIndex}
              newFormation={"4-4-2"}
              newFormationIndex={0}
              setFormationIndex = {(data) => setFormationIndex(data)}
              temporarySquad = {temporarySquad}
              setTemporarySquad = {setTemporarySquad}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              formationIndex={formationIndex}
              newFormation={"4-3-3"}
              newFormationIndex={1}
              setFormationIndex={(data) => setFormationIndex(data)}
              temporarySquad ={temporarySquad}
              setTemporarySquad = {setTemporarySquad}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              formationIndex={formationIndex}
              newFormation={"4-5-1"}
              newFormationIndex={2}
              setFormationIndex={(data) => setFormationIndex(data)}
              temporarySquad ={temporarySquad}
              setTemporarySquad = {setTemporarySquad}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              formationIndex={formationIndex}
              newFormation={"5-4-1"}
              newFormationIndex={3}
              setFormationIndex={(data) => setFormationIndex(data)}
              temporarySquad ={temporarySquad}
              setTemporarySquad = {setTemporarySquad}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              formationIndex={formationIndex}
              newFormation={"5-3-2"}
              newFormationIndex={4}
              setFormationIndex={(data) => setFormationIndex(data)}
              temporarySquad ={temporarySquad}
              setTemporarySquad = {setTemporarySquad}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              formationIndex={formationIndex}
              newFormation={"3-5-2"}
              newFormationIndex={5}
              setFormationIndex={(data) => setFormationIndex(data)}
              temporarySquad ={temporarySquad}
              setTemporarySquad = {setTemporarySquad}
            />
            <FormationButton
              id={"formation-button-last"}
              theSquad={theSquad}
              formationIndex={formationIndex}
              newFormation={"3-4-3"}
              newFormationIndex={6}
              setFormationIndex={(data) => setFormationIndex(data)}
              temporarySquad ={temporarySquad}
              setTemporarySquad = {setTemporarySquad}
            />
          </div>
        </div>
        <div id="pitch">
          <div id="pitch-line-gk">
            <PlayerBean
              theSquad={theSquad}
              squadIndex={0}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
              />
          </div>
          <div id="pitch-line-def">
            <PlayerBean
              theSquad={theSquad}
              squadIndex={1}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={2}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={3}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={4}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={5}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
          </div>
          <div id="pitch-line-mid">
            <PlayerBean
              theSquad={theSquad}
              squadIndex={6}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={7}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={8}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={9}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={10}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
          </div>
          <div id="pitch-line-fwd">
            <PlayerBean
              theSquad={theSquad}
              squadIndex={11}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={12}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
            <PlayerBean
              theSquad={theSquad}
              squadIndex={13}
              disabledButtons={disabledButtons} 
              setDisabledButtons={(data) => setDisabledButtons(data)}
              balance = {balance}
              setBalance = {setBalance}
              clubCounters = {clubCounters}
              clubCounterSetters = {clubCounterSetters}
              setTemporarySquad = {setTemporarySquad}
              positionCounters = {positionCounters}
              playerToSwitchIndex = {playerToSwitchIndex}
              setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
              setBeansCounter = {setBeansCounter}
              beansCounter = {beansCounter}
              setStatsToShowIndex = {setStatsToShowIndex}
              setShowStats={setShowStats}
            />
          </div>
        </div>
          <Market
            id={"market-wide-screen"}
            theSquad={theSquad}
            formationIndex={formationIndex}
            disabledButtons={disabledButtons} 
            setDisabledButtons={(data) => setDisabledButtons(data)}
            balance = {balance}
            setBalance = {setBalance}
            clubCounters = {clubCounters}
            positionCounters = {positionCounters}
            clubCounterSetters = {clubCounterSetters}
            setTemporarySquad = {setTemporarySquad}
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
                  theSquad={theSquad}
                  squadIndex={14}
                  disabledButtons={disabledButtons} 
                  setDisabledButtons={(data) => setDisabledButtons(data)}
                  balance = {balance}
                  setBalance = {setBalance}
                  clubCounters = {clubCounters}
                  clubCounterSetters = {clubCounterSetters}
                  setTemporarySquad = {setTemporarySquad}
                  positionCounters = {positionCounters}
                  playerToSwitchIndex = {playerToSwitchIndex}
                  setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
                  setBeansCounter = {setBeansCounter}
                  beansCounter = {beansCounter}
                  setStatsToShowIndex = {setStatsToShowIndex}
                  setShowStats={setShowStats}
                />
                <PlayerBean
                  theSquad={theSquad}
                  squadIndex={15}
                  disabledButtons={disabledButtons} 
                  setDisabledButtons={(data) => setDisabledButtons(data)}
                  balance = {balance}
                  setBalance = {setBalance}
                  clubCounters = {clubCounters}
                  clubCounterSetters = {clubCounterSetters}
                  setTemporarySquad = {setTemporarySquad}
                  positionCounters = {positionCounters}
                  playerToSwitchIndex = {playerToSwitchIndex}
                  setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
                  setBeansCounter = {setBeansCounter}
                  beansCounter = {beansCounter}
                  setStatsToShowIndex = {setStatsToShowIndex}
                  setShowStats={setShowStats}  
                />
                <PlayerBean
                  theSquad={theSquad}
                  squadIndex={16}
                  disabledButtons={disabledButtons} 
                  setDisabledButtons={(data) => setDisabledButtons(data)}
                  balance = {balance}
                  setBalance = {setBalance}
                  clubCounters = {clubCounters}
                  clubCounterSetters = {clubCounterSetters}
                  setTemporarySquad = {setTemporarySquad}
                  positionCounters = {positionCounters}
                  playerToSwitchIndex = {playerToSwitchIndex}
                  setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
                  setBeansCounter = {setBeansCounter}
                  beansCounter = {beansCounter}
                  setStatsToShowIndex = {setStatsToShowIndex}
                  setShowStats={setShowStats}
                />
                <PlayerBean
                  theSquad={theSquad}
                  squadIndex={17}
                  disabledButtons={disabledButtons} 
                  setDisabledButtons={(data) => setDisabledButtons(data)}
                  balance = {balance}
                  setBalance = {setBalance}
                  clubCounters = {clubCounters}
                  clubCounterSetters = {clubCounterSetters}
                  setTemporarySquad = {setTemporarySquad}
                  positionCounters = {positionCounters}
                  playerToSwitchIndex = {playerToSwitchIndex}
                  setPlayerToSwitchIndex = {setPlayerToSwitchIndex}
                  setBeansCounter = {setBeansCounter}
                  beansCounter = {beansCounter}
                  setStatsToShowIndex = {setStatsToShowIndex}
                  setShowStats={setShowStats}
                />
          </div>
        </div>
      </div>
      <div id="small-screen-background-container">
        <Market
          id={"market-small-screen"}
          theSquad={theSquad}
          formationIndex={formationIndex}
          disabledButtons={disabledButtons} 
          setDisabledButtons={(data) => setDisabledButtons(data)}
          balance = {balance}
          setBalance = {setBalance}
          clubCounters = {clubCounters}
          clubCounterSetters = {clubCounterSetters}
          positionCounters = {positionCounters}
          setTemporarySquad = {setTemporarySquad}
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
