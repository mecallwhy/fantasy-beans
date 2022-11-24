import React from "react";

const Day = (props) => {
  const {day} = props;
  const mappedMatches = day.map(match => {
    <li key={match.id} className="schedule-match">
      <span className="schedule-match-host">{match.localTeam.data.name}</span>
      <span className="schedule-match-result">{match.time.starting_at.time.slice(0,-3)}</span>
      <span className="schedule-match-guest">{match.visitorTeam.data.name}</span>
    </li>
  })
  return (
    <li key={day.id}>
      <div>
        <ul className="schedule-match-list">
          <li key={day.id}>
            <h3>{day[0].time.starting_at.date}</h3>
          </li>
          {mappedMatches}
        </ul>
      </div>
    </li>
)}

export default Day;
