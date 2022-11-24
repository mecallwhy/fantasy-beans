import axios from "axios";
import { useState, useEffect } from "react";
import Day from "./Day";

const Matchday = (props) => {
  const {season, matchday} = props;

  const groupBy = (data, prop) => {
    const grouped = [];
    for (const match of data) {
      const dateOfStart = match.time.starting_at[prop];
      if (!grouped[dateOfStart]) {
        grouped[dateOfStart] = [];
      }
      grouped[dateOfStart].push(match);
    }
    return Object.values(grouped);
  }
  const [groupedMatchday, setGroupedMatchday] = useState();
  const mappedDates = groupedMatchday && groupedMatchday.map(day => {
    <Day day={day}/>
  })
  useEffect(()=>{
    season && axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/between/${matchday.start}/${matchday.end}?api_token=${process.env.REACT_APP_API_KEY}&include=localTeam,visitorTeam`)
    .then((response) => {
      setGroupedMatchday(groupBy(response.data.data, "date"));
    })
  },[matchday.end, matchday.start, season])

  return (
    <div className="matchday-data">
      <ul className="matchdays-list">{mappedDates}</ul>
    </div>
  )
}

export default Matchday;
