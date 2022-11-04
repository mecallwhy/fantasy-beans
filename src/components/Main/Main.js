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
  const teamTotalValue = (()=>{
    let value = 0;
    for(let player of theSquad){
      value += player.playerData.price;
    }
    return value;
  });
  const initialBalance = 170;
  const balance = Math.round(initialBalance*10 - teamTotalValue()*10)/10
  const clubTotalValue = Math.round(balance*10 + teamTotalValue()*10)/10;
  const season = 19686;
  const league = 501;
  const [formationIndex, setFormationIndex] = useState(0);
  const [playerToSwitchId, setPlayerToSwitchId] = useState();
  const [matchdayIndex, setMatchdayIndex] = useState(0);
  const [teamName, setTeamName] = useState("FC Team");
  const [renameActive, setRenameActive] = useState(false);
  const [statsToShow, setStatsToShow] = useState();
  const [showStats, setShowStats] = useState(false);
  const matchdaysPlayed = 0;
  const [teamDataID, setTeamDataID] = useState("teamdata");
  const roles = [
    {
      position: "g",
      rolesList: ["g1", "g2"],
    },
    {
      position: "d",
      rolesList: ["d1", "d2", "d3", "d4", "d5"]
    },
    {
      position: "m",
      rolesList: ["m1", "m2", "m3", "m4", "m5"]
    },
    {
      position: "f",
      rolesList: ["f1", "f2", "f3"]
    }
  ]
  const [formation, setFormation] = useState({
    defenders: 4,
    midfielders: 4,
    forwards: 2
  });
  const positionLimits = [
    {position: "g", limit: 2},
    {position: "d", limit: 5},
    {position: "m", limit: 5},
    {position: "f", limit: 3},
  ]
  const playersPerClubLimit = 3;

  const playerBeanProps = {
    theSquad,
    setTheSquad,
    playerToSwitchId,
    setPlayerToSwitchId,
    setStatsToShow,
    setShowStats,
  };
  
  return (
    <div id="main-grid">
      {showStats && <StatsChart 
        statsToShow={statsToShow}
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
            teamName= {teamName}
            setTeamName= {setTeamName}
            renameActive= {renameActive}
            setRenameActive= {setRenameActive}/>
          <h2 id="teamdata-balance-status">{balance}/{clubTotalValue}K</h2>
          <button 
            id="teamdata-save-button"
            disabled={theSquad.length !== 15}>Zapisz</button>
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
              player={theSquad.find(singlePlayer => singlePlayer.role === "g1")}
              playerBeanProps = {playerBeanProps}
              />
          </div>
          <div id="pitch-line-def">
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "d1")}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "d2")}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "d3")}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "d4")}
              extraBean={formation.defenders < 4}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "d5")}
              extraBean={formation.defenders < 5}
              playerBeanProps = {playerBeanProps}
            />
          </div>
          <div id="pitch-line-mid">
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "m1")}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "m2")}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "m3")}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "m4")}
              extraBean={formation.midfielders < 4}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "m5")}
              extraBean={formation.midfielders < 5}
              playerBeanProps = {playerBeanProps}
            />
          </div>
          <div id="pitch-line-fwd">
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "f1")}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "f2")}
              extraBean={formation.forwards < 2}
              playerBeanProps = {playerBeanProps}
            />
            <PlayerBean
              player={theSquad.find(singlePlayer => singlePlayer.role === "f3")}
              extraBean={formation.forwards < 3}
              playerBeanProps = {playerBeanProps}
            />
          </div>
        </div>
          <Market
            id={"market-wide-screen"}
            setTheSquad={setTheSquad}
            theSquad={theSquad}
            balance = {balance}
            clubTotalValue ={clubTotalValue}
            setStatsToShow={setStatsToShow}
            setShowStats={setShowStats}
            positionLimits={positionLimits}
            playersPerClubLimit={playersPerClubLimit}
            roles={roles}
          />
        <Schedule
          id={"schedule-wide-screen"}    
          matchdayIndex={matchdayIndex}
          setMatchdayIndex={setMatchdayIndex}
          league={league}
          season={season}/>
      </div>
      <div id="bench-img-container">
        <div id="bench-gradient-container">
          <div id="bench">
                <PlayerBean
                  player={theSquad.find(singlePlayer => singlePlayer.role === "g2")}
                  extraBean={false}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  player={theSquad.find(singlePlayer => singlePlayer.role === "d4")}
                  extraBean={formation.defenders > 3}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  player={theSquad.find(singlePlayer => singlePlayer.role === "d5")}
                  extraBean={formation.defenders > 4}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  player={theSquad.find(singlePlayer => singlePlayer.role === "m4")}
                  extraBean={formation.midfielders > 3}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  player={theSquad.find(singlePlayer => singlePlayer.role === "m5")}
                  extraBean={formation.midfielders > 4}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  player={theSquad.find(singlePlayer => singlePlayer.role === "f2")}
                  extraBean={formation.forwards > 1}
                  playerBeanProps = {playerBeanProps}
                />
                <PlayerBean
                  player={theSquad.find(singlePlayer => singlePlayer.role === "f3")}
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
          balance = {balance}
          clubTotalValue ={clubTotalValue}
          setStatsToShow={setStatsToShow}
          setShowStats={setShowStats}
          positionLimits={positionLimits}
          playersPerClubLimit={playersPerClubLimit}
          roles={roles}
        />
        <Schedule
          id={"schedule-small-screen"}
          matchdayIndex={matchdayIndex}
          setMatchdayIndex={setMatchdayIndex}
          league={league}
          season={season}
        />
      </div>
    </div>
  );
}

export default Main;
