import React, { useState } from "react";
import "./styles/style.css";

import PlayerBean from "./PlayerBean.js";
import Market from "./Market.js";
import FormationButton from "./FormationButton.js";
import Schedule from "./Schedule.js";
import TeamName from "./TeamName.js";
import StatsChart from "./StatsChart";

function Main(){

  const config = {
    seasonId: 19686,
    leagueId: 501,
    theSquadInitial: [],
    playersPerClubLimit: 3,
    playersPerSquadLimit: 15,
    initialBalance: 170,
    defaultFormation: {
      formationIndex: 0,
      formationName: "4-4-2",
      goalkeepers: 1,
      defenders: 4,
      midfielders: 4,
      forwards: 2
    },
    formations: [
      {
        formationIndex: 0,
        formationName: "4-4-2",
        goalkeepers: 1,
        defenders: 4,
        midfielders: 4,
        forwards: 2
      },
      {
        formationIndex: 1,
        formationName: "4-3-3",
        goalkeepers: 1,
        defenders: 4,
        midfielders: 3,
        forwards: 3
      },
      {
        formationIndex: 2,
        formationName: "4-5-1",
        goalkeepers: 1,
        defenders: 4,
        midfielders: 5,
        forwards: 1
      },
      {
        formationIndex: 3,
        formationName: "5-4-1",
        goalkeepers: 1,
        defenders: 5,
        midfielders: 4,
        forwards: 1
      },
      {
        formationIndex: 4,
        formationName: "5-3-2",
        goalkeepers: 1,
        defenders: 5,
        midfielders: 3,
        forwards: 2
      },
      {
        formationIndex: 5,
        formationName: "3-5-2",
        goalkeepers: 1,
        defenders: 3,
        midfielders: 5,
        forwards: 2
      },
      {
        formationIndex: 6,
        formationName: "3-4-3",
        goalkeepers: 1,
        defenders: 3,
        midfielders: 4,
        forwards: 3
      }
    ],
    positions: {
      goalkeeper: {
        limitPerSquad: 2,
        shortName: "gk",
        positionName: "goalkeepers",
        pitchRolesList: [
          {
            roleName: "g1",
            beanRowIndex: 1
          }
        ],
        benchRolesList: [
          {
            roleName: "g2",
            beanRowIndex: 2
          }
        ]
      },
      defender: {
        limitPerSquad: 5,
        shortName: "def",
        positionName: "defenders",
        pitchRolesList: [
          {
            roleName: "d1",
            beanRowIndex: 1
          },
          {
            roleName: "d2",
            beanRowIndex: 2
          },
          {
            roleName: "d3",
            beanRowIndex: 3
          },
          {
            roleName: "d4",
            beanRowIndex: 4
          },
          {
            roleName: "d5",
            beanRowIndex: 5
          },
        ],
        benchRolesList: [
          {
            roleName: "d4",
            beanRowIndex: 4
          },
          {
            roleName: "d5",
            beanRowIndex: 5
          },
        ]
      },
      midfielder: {
        limitPerSquad: 5,
        shortName: "mid",
        positionName: "midfielders",
        pitchRolesList: [
          {
            roleName: "m1",
            beanRowIndex: 1
          },
          {
            roleName: "m2",
            beanRowIndex: 2
          },
          {
            roleName: "m3",
            beanRowIndex: 3
          },
          {
            roleName: "m4",
            beanRowIndex: 4
          },
          {
            roleName: "m5",
            beanRowIndex: 5
          },
        ],
        benchRolesList: [
          {
            roleName: "m4",
            beanRowIndex: 4
          },
          {
            roleName: "m5",
            beanRowIndex: 5
          },
        ]
      },
      forward: {
        limitPerSquad: 3,
        shortName: "fwd",
        positionName: "forwards",
        pitchRolesList: [
          {
            roleName: "f1",
            beanRowIndex: 1
          },
          {
            roleName: "f2",
            beanRowIndex: 2
          },
          {
            roleName: "f3",
            beanRowIndex: 3
          },
        ],
        benchRolesList: [
          {
            roleName: "f2",
            beanRowIndex: 2
          },
          {
            roleName: "f3",
            beanRowIndex: 3
          },
        ]
      },
    },
  }
  const [currentFormation, setCurrentFormation] = useState(config.defaultFormation);
  const [theSquad, setTheSquad] = useState(config.theSquadInitial);
  const [playerToSwitchId, setPlayerToSwitchId] = useState();
  const [matchdayIndex, setMatchdayIndex] = useState(0);
  const [teamName, setTeamName] = useState("FC Team");
  const [renameActive, setRenameActive] = useState(false);
  const [statsToShow, setStatsToShow] = useState();
  const [showStats, setShowStats] = useState(false);
  const matchdaysPlayed = 0;
  const [teamDataID, setTeamDataID] = useState("teamdata");
  const teamTotalValue = (()=>{
    let value = 0;
    for(let player of theSquad){
      value += player.playerData.price;
    }
    return value;
  })
  const balance = Math.round(config.initialBalance*10 - teamTotalValue()*10)/10;
  const clubTotalValue = Math.round(balance*10 + teamTotalValue()*10)/10;

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
      {showStats &&
      <StatsChart
        statsToShow={statsToShow}
        matchdaysPlayed={matchdaysPlayed}
        setShowStats={setShowStats}
      />}
      <div id="menu-img-container">
        <div id="menu">
          <h1 id="main-title">FANTASY BEANS</h1>
        </div>
      </div>
      <div id="pitch-img-container">
        <div id={teamDataID}>
          {window.addEventListener('scroll', ()=>{
            const scrolled = window.scrollY;
            if (scrolled > 200)
              setTeamDataID("teamdata-scrolled")
            else
              setTeamDataID("teamdata")
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
            disabled={theSquad.length !== config.playersPerSquadLimit}>Zapisz</button>
          <div id="teamdata-formations">
            {config.formations.map((singleFormation) =>
              <FormationButton
                id="formation-button-first"
                formation={singleFormation}
                currentFormation={currentFormation}
                setCurrentFormation={setCurrentFormation}
              />
            )}
          </div>
        </div>
        <div id="pitch">
          {
            [config.positions.goalkeeper,
              config.positions.defender,
              config.positions.midfielder,
              config.positions.forward]
            .map((singlePosition) =>
              <div id={`pitch-line-${singlePosition.shortName}`}>
                {singlePosition.pitchRolesList.map((role) =>
                  <PlayerBean
                    player={theSquad.find(singlePlayer => singlePlayer.role === role.roleName)}
                    playerBeanProps = {playerBeanProps}
                    isUnusedBean = {role.beanRowIndex > currentFormation[singlePosition.positionName]}
                  />
                )}
              </div>
            )
          }
        </div>
          <Market
            id="market-wide-screen"
            setTheSquad={setTheSquad}
            theSquad={theSquad}
            balance = {balance}
            clubTotalValue ={clubTotalValue}
            setStatsToShow={setStatsToShow}
            setShowStats={setShowStats}
            playersPerClubLimit={config.playersPerClubLimit}
            positions={config.positions}
          />
        <Schedule
          id="schedule-wide-screen"    
          matchdayIndex={matchdayIndex}
          setMatchdayIndex={setMatchdayIndex}
          league={config.leagueId}
          season={config.seasonId}/>
      </div>
      <div id="bench-img-container">
        <div id="bench-gradient-container">
          <div id="bench">
            {
              [config.positions.goalkeeper, 
                config.positions.defender, 
                config.positions.midfielder, 
                config.positions.forward]
              .map((singlePosition) =>
                singlePosition.benchRolesList.map((role) =>
                  <PlayerBean
                    player={theSquad.find(singlePlayer => singlePlayer.role === role.roleName)}
                    playerBeanProps = {playerBeanProps}
                    isUnusedBean = {role.beanRowIndex <= currentFormation[singlePosition.positionName]}
                  />
                )
              )
            }
          </div>
        </div>
      </div>
      <div id="small-screen-background-container">
        <Market
          id="market-small-screen"
          setTheSquad={setTheSquad}
          theSquad={theSquad}
          balance = {balance}
          clubTotalValue ={clubTotalValue}
          setStatsToShow={setStatsToShow}
          setShowStats={setShowStats}
          playersPerClubLimit={config.playersPerClubLimit}
          positions={config.positions}
        />
        <Schedule
          id="schedule-small-screen"
          matchdayIndex={matchdayIndex}
          setMatchdayIndex={setMatchdayIndex}
          league={config.leagueId}
          season={config.seasonId}
        />
      </div>
    </div>
  );
}

export default Main;
