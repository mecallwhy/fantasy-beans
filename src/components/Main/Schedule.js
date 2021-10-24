import React from "react";
import Date from "./Date";
import matchdayList from "./matchdayList";
import rightArrow from "./images/right-arrow.png";
import leftArrow from "./images/left-arrow.png";

const Schedule = (props) => {
    const {id, matchdayIndex, setMatchdayIndex} = props

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
          
          <Date matchdayIndex={matchdayIndex} dateIndex={0} />
          {matchdayList[matchdayIndex][1].date && <Date matchdayIndex={matchdayIndex} dateIndex={1}/>}
          {matchdayList[matchdayIndex][2].date && <Date matchdayIndex={matchdayIndex} dateIndex={2}/>}
          {matchdayList[matchdayIndex][3].date && <Date matchdayIndex={matchdayIndex} dateIndex={3}/>}
        </div>
    )
}

export default Schedule