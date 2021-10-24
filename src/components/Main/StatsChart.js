import React from "react";
import {Line} from "react-chartjs-2"
import players from "./Players.js";
import close from "./images/close.png";

const StatsChart = (props) => {

    const {statsToShowIndex, matchdaysPlayed, setShowStats} = props
    let chartColor = ''
    let statsClubClassName = ''
    let position = ''
    let positionColor = ''
    const averagePointsPerMatch = () => {
      if(matchdaysPlayed === 0){
        return 0
      }
      else{
        return Math.floor((players[statsToShowIndex].overallPoints/matchdaysPlayed)*10)/10
      }
    }
    switch(players[statsToShowIndex].position){
      case "Gk":  position='Bramkarz'
                  positionColor='rgb(219, 144, 3)'
                  break;
      case "Def": position='Obrońca'
                  positionColor='rgba(0, 167, 14)'
                  break;
      case "Mid": position='Pomocnik'
                  positionColor='rgba(0, 25, 167)'
                  break;
      case "Fwd": position='Napastnik'
                  positionColor='rgba(209, 3, 3)'
                  break;
      default:
                  break;
    }
      switch(players[statsToShowIndex].club){
        case "Atalanta": 
            chartColor = '#1E71B8'
            statsClubClassName = 'stats-club-Ata'
            break;
        case "Bologna": 
            chartColor = '#1A2F48'
            statsClubClassName = 'stats-club-Bol'
            break;
        case "Cagliari": 
            chartColor = '#002350'
            statsClubClassName = 'stats-club-Cag'
            break;
        case "Empoli": 
            chartColor = '#00579C'
            statsClubClassName = 'stats-club-Emp'
            break;
        case "Fiorentina": 
            chartColor = '#482E92'
            statsClubClassName = 'stats-club-Fio'
            break;
        case "Genoa": 
            chartColor = '#AD1919'
            statsClubClassName = 'stats-club-Gen'
            break;
        case "Hellas": 
            chartColor = '#005395'
            statsClubClassName = 'stats-club-Hel'
            break;
        case "Inter": 
            chartColor = '#010E80'
            statsClubClassName = 'stats-club-Int'
            break;
        case "Juventus": 
            chartColor = 'black'
            statsClubClassName = 'stats-club-Juv'
            break;
        case "Lazio": 
            chartColor = 'black'
            statsClubClassName = 'stats-club-Laz'
            break;
        case "Milan": 
            chartColor = '#FB090B'
            statsClubClassName = 'stats-club-Mil'
            break;
        case "Napoli": 
            chartColor= '#12A0D7'
             statsClubClassName = 'stats-club-Nap'
            break;
        case "Roma": 
            chartColor = '#8E1F2F'
            statsClubClassName = 'stats-club-Rom'
            break;
        case "Salernitana": 
            chartColor = 'rgba(79, 18, 17)'
            statsClubClassName = 'stats-club-Sal'
            break;
        case "Sampdoria": 
            chartColor = 'rgba(27, 84, 151)'
            statsClubClassName = 'stats-club-Sam'
            break;
        case "Sassuolo": 
            chartColor = 'rgba(0, 167, 82)'
            statsClubClassName = 'stats-club-Sas'
            break;
        case "Spezia": 
            chartColor = 'black'
            statsClubClassName = 'stats-club-Spe'
            break;
        case "Torino": 
            chartColor = '#8A1E03'
            statsClubClassName = 'stats-club-Tor'
            break;
        case "Udinese": 
            chartColor = 'rgb(49, 97, 135)'
            statsClubClassName = 'stats-club-Udi'
            break;
        case "Venezia": 
            chartColor = 'black'
            statsClubClassName = 'stats-club-Ven'
            break;
        default:
            break;
      }
    return(
      <div id="stats-blur">
        <div 
          id="stats-container">
          <h1 id="stats-fullname"><span>{players[statsToShowIndex].name}</span>{" " + players[statsToShowIndex].surname}</h1>
          <ul id="stats-points">Punkty:
            <li>ostatnia kolejka <span>{players[statsToShowIndex].recentMatchdayPoints} pkt</span></li>
            {/* <li>forma</li>   Uzupełnić po dodaniu backendu: średnia z ostatnich pięciu meczy.*/}
            <li>średnia <span>{averagePointsPerMatch()} pkt</span></li>
            <li>łącznie <span>{players[statsToShowIndex].overallPoints} pkt</span></li>
          </ul>
          <h3 
            id="stats-club"
            className={statsClubClassName}>
              {players[statsToShowIndex].club + " #" + players[statsToShowIndex].shirtNumber}</h3>
          <h3 
            id="stats-position"
            style={{backgroundColor: positionColor}}>{position}</h3>
          <img 
            id="stats-close-img" 
            src={close}
            alt="close"
            onClick={()=>{setShowStats(false)}}></img>
          <div 
            id="chart-container">
            <Line
              data={{
                labels: [
                'kolejka 1.', 
                'kolejka 2.', 
                'kolejka 3.', 
                'kolejka 4.', 
                'kolejka 5.', 
                'kolejka 6.',
                'kolejka 7.',
                'kolejka 8.',
                'kolejka 9.',
                'kolejka 10.',
                'kolejka 11.',
                'kolejka 12.'],
                datasets: [{
                  fill: origin,
                  borderColor: chartColor,
                  backgroundColor: chartColor,
                  tension: 0.1,
                  label: 'punkty',
                  data: [
                    players[statsToShowIndex].matchday1Points, 
                    players[statsToShowIndex].matchday2Points, 
                    players[statsToShowIndex].matchday3Points, 
                    players[statsToShowIndex].matchday4Points, 
                    players[statsToShowIndex].matchday5Points, 
                    players[statsToShowIndex].matchday6Points, 
                    players[statsToShowIndex].matchday7Points, 
                    players[statsToShowIndex].matchday8Points, 
                    players[statsToShowIndex].matchday9Points, 
                    players[statsToShowIndex].matchday10Points, 
                    players[statsToShowIndex].matchday11Points, 
                    players[statsToShowIndex].matchday12Points]
                }]
              }}
            />
          </div>
        </div>
      </div>
    )
    
}

export default StatsChart