import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Date from "./Date";

const Matchday = (props) => {
    const {league, season, matchday} = props;

    const groupBy = (data, prop) => {
        var grouped = [];
        for (const match of data) {
            let dateOfStart = match.time.starting_at[prop];
            if (!grouped[dateOfStart]) {
                grouped[dateOfStart] = [];
            }
            grouped[dateOfStart].push(match);
        }
        return Object.values(grouped);
    }
    const [groupedMatchday, setGroupedMatchday] = useState();
    const mappedDates = groupedMatchday && groupedMatchday.map(date => {
        return(
            <li key={date.id}>
                <Date date={date}/>
            </li>
        )
    })
    useEffect(()=>{
        season && axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/between/${matchday.start}/${matchday.end}?api_token=${process.env.REACT_APP_API_KEY}&include=localTeam,visitorTeam`)
        .then((response) => {
            setGroupedMatchday(groupBy(response.data.data, "date"));
        })
    },[matchday.end, matchday.start, season])

    return(
        <div className="matchday-data">
            <ul className="matchdays-list">{mappedDates}</ul>
        </div>
    )
}

export default Matchday;
