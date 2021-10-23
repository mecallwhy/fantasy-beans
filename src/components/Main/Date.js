import React from "react";
import matchdayList from "./matchdayList";

const Date = (props) => {
    const {matchdayIndex, dateIndex} = props

    return(
        <div>
            
            <ul className={"schedule-match-list"}>
                <li>
                    <h3>{matchdayList[matchdayIndex][dateIndex].date}</h3>
                </li>
                <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team1}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time1}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team2}</span></li>
                {matchdayList[matchdayIndex][dateIndex].team4 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team3}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time2}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team4}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team6 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team5}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time3}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team6}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team8 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team7}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time4}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team8}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team10 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team9}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time5}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team10}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team12 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team11}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time6}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team12}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team14 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team13}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time7}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team14}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team16 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team15}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time8}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team16}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team18 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team17}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time9}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team18}</span></li>}
                {matchdayList[matchdayIndex][dateIndex].team20 && <li className={"schedule-match"}>
                    <span className="schedule-match-host">{matchdayList[matchdayIndex][dateIndex].team19}</span>
                    <span className="schedule-match-result">{matchdayList[matchdayIndex][dateIndex].time10}</span>
                    <span className="schedule-match-guest">{matchdayList[matchdayIndex][dateIndex].team20}</span></li>}
            </ul>
        </div>
            
    )
}

export default Date