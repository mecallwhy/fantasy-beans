import React, { useState, useEffect } from "react";
import Matchday from "./Matchday";
import rightArrow from "./images/right-arrow.png";
import leftArrow from "./images/left-arrow.png";
import axios from "axios";

const Schedule = (props) => {
    const {id, matchdayIndex, setMatchdayIndex, league, season} = props;
    const [schedule, setSchedule] = useState();
    useEffect(()=>{
      season && axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/season/${season}?api_token=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setSchedule(response.data.data)
      })
    },[season])

    return (
        <div id={id}>
          <h1>Terminarz</h1>
          <div id="schedule-matchday">
            <h2>Kolejka {matchdayIndex+1}.</h2>
            {matchdayIndex > 0 && <button id="schedule-matchday-prev-button" onClick={()=>{setMatchdayIndex(matchdayIndex-1)}}>
                <img src={leftArrow} alt="left"></img>
              </button>}
            {matchdayIndex < 37 && <button id="schedule-matchday-next-button" onClick={()=>{setMatchdayIndex(matchdayIndex+1)}}>
                <img src={rightArrow} alt="right"></img>
              </button>} 
          </div> 
          {schedule && <Matchday league={league} season={season} matchday={schedule[matchdayIndex]}/>}
        </div>
    )
}

export default Schedule
