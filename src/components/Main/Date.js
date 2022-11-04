import React from "react";

const Date = (props) => {
    const {date} = props;
    const mappedMatches = date.map(match => {
        return <li key={match.id} className={"schedule-match"}>
        <span className="schedule-match-host">{match.localTeam.data.name}</span>
        <span className="schedule-match-result">{match.time.starting_at.time.slice(0,-3)}</span>
        <span className="schedule-match-guest">{match.visitorTeam.data.name}</span></li>
    })
    return(
        <div>
            <ul className={"schedule-match-list"}>
                <li>
                    <h3>{date[0].time.starting_at.date}</h3>
                </li>
                {mappedMatches}
            </ul>
        </div>
    )
}

export default Date;
