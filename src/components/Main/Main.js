import React, { useState } from "react";
import "./styles/style.css";

import players from "./Players";
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
  const [clubTotalValue, setClubTotalValue] = useState(170);
  const teamTotalValue = (()=>{
    let value = 0
    for(let i=0;i<disabledButtons.length;i++){
      value += players[disabledButtons[i].marketIndex].price
    }
    return value
  })
  let balance = Math.round(clubTotalValue*10-teamTotalValue()*10)/10
  const [playerToSwitchIndex, setPlayerToSwitchIndex] = useState(0);
  const [matchdayIndex, setMatchdayIndex] = useState(0);
  const [teamname, setTeamName] = useState("FC Team");
  const [renameActive, setRenameActive] = useState(false);
  const [statsToShowIndex, setStatsToShowIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const matchdaysPlayed = 0;
  const [teamDataID, setTeamDataID] = useState("teamdata");
  const [formation, setFormation] = useState({
    defenders: 4,
    midfielders: 4,
    forwards: 2
  });

  const playerBeanProps = {
    theSquad,
    setTheSquad,
    disabledButtons,
    setDisabledButtons,
    playerToSwitchIndex,
    setPlayerToSwitchIndex,
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
            disabled={disabledButtons.length !== 15}>Zapisz</button>
          <div id="teamdata-formations">
            <FormationButton
              id={"formation-button-first"}
              theSquad={theSquad}
              setFormation={setFormation}
              formationName={"4-4-2"}
              newFormationIndex={0}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              setFormation={setFormation}
              formationName={"4-3-3"}
              newFormationIndex={1}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              setFormation={setFormation}
              formationName={"4-5-1"}
              newFormationIndex={2}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              setFormation={setFormation}
              formationName={"5-4-1"}
              newFormationIndex={3}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              setFormation={setFormation}
              formationName={"5-3-2"}
              newFormationIndex={4}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={""}
              theSquad={theSquad}
              setFormation={setFormation}
              formationName={"3-5-2"}
              newFormationIndex={5}
              formationIndex={formationIndex}
              setFormationIndex={setFormationIndex}
            />
            <FormationButton
              id={"formation-button-last"}
              theSquad={theSquad}
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
              playerIndex={0}
              position={theSquad.goalkeepers}
              playerBeanProps = {playerBeanProps}
              />
          </div>
          <div id="pitch-line-def">
            <PlayerBean
              playerIndex={0}
              position={theSquad.defenders}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={1}
              position={theSquad.defenders}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={2}
              position={theSquad.defenders}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={3}
              position={theSquad.defenders}
              extraBean={formation.defenders < 4}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={4}
              position={theSquad.defenders}
              extraBean={formation.defenders < 5}
              playerBeanProps = {playerBeanProps}
            />
          </div>
          <div id="pitch-line-mid">
            <PlayerBean
              playerIndex={0}
              position={theSquad.midfielders}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={1}
              position={theSquad.midfielders}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={2}
              position={theSquad.midfielders}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={3}
              position={theSquad.midfielders}
              extraBean={formation.midfielders < 4}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={4}
              position={theSquad.midfielders}
              extraBean={formation.midfielders < 5}
              playerBeanProps = {playerBeanProps}
            />
          </div>
          <div id="pitch-line-fwd">
            <PlayerBean
              playerIndex={0}
              position={theSquad.forwards}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={1}
              position={theSquad.forwards}
              extraBean={formation.forwards < 2}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              playerIndex={2}
              position={theSquad.forwards}
              extraBean={formation.forwards < 3}
              playerBeanProps = {playerBeanProps}
            />
          </div>
        </div>
          <Market
            id={"market-wide-screen"}
            theSquad={theSquad}
            setTheSquad={setTheSquad}
            disabledButtons={disabledButtons} 
            setDisabledButtons={(data) => setDisabledButtons(data)}
            balance = {balance}
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
                  playerIndex={1}
                  position={theSquad.goalkeepers}
                  extraBean={false}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  playerIndex={3}
                  position={theSquad.defenders}
                  extraBean={formation.defenders > 3}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  playerIndex={4}
                  position={theSquad.defenders}
                  extraBean={formation.defenders > 4}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  playerIndex={3}
                  position={theSquad.midfielders}
                  extraBean={formation.midfielders > 3}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  playerIndex={4}
                  position={theSquad.midfielders}
                  extraBean={formation.midfielders > 4}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  playerIndex={1}
                  position={theSquad.forwards}
                  extraBean={formation.forwards > 1}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  playerIndex={2}
                  position={theSquad.forwards}
                  extraBean={formation.forwards > 2}
                  playerBeanProps = {playerBeanProps}
                />
          </div>
        </div>
      </div>
      <div id="small-screen-background-container">
        <Market
          id={"market-small-screen"}
          setTheSquad={setTheSquad}
          theSquad={theSquad}
          disabledButtons={disabledButtons} 
          setDisabledButtons={(data) => setDisabledButtons(data)}
          balance = {balance}
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
