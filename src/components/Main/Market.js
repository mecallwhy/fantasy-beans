import React, { useEffect, useState} from "react";
import axios from "axios";
import players from "./Players";
import AutoPickButton from "./AutoPickButton.js";
import rightArrow from "./images/right-arrow.png";
import leftArrow from "./images/left-arrow.png";
import { inRange } from "./utilities.js";
import {findFirstFreeRole} from "./utilities.js";
import { playersWithinLimits } from "./utilities";

const Market = (props) => {

  const {
    id,
    setTheSquad,
    theSquad, 
    balance,
    clubTotalValue,
    setStatsToShow,
    setShowStats,
    playersPerClubLimit,
    positions
   } = props;

  useEffect(()=>{
    axios.get(`https://soccer.sportmonks.com/api/v2.0/countries/320/teams?api_token=${process.env.REACT_APP_API_KEY}&include=squad`)
    .then((response) => {
      for (const team of response.data.data){
        // console.log(team.squad)
      }
    })
  },[])

  const [playersToMap, setPlayersToMap] = useState(players)
  const [visibleMarketPage, setVisibleMarketPage] = useState(1)
  const [marketListID, setMarketListID] = useState("market-list")
  const [availablePlayers, setAvaliablePlayers] = useState([])
  const handleStats = (player)=>{
    setStatsToShow(player)
    setShowStats(true)
  }
  const clubNameVersion = (player)=>{
    if(id==="market-wide-screen"){
      return player.club.slice(0,3).toUpperCase()
    }
    else if(id==="market-small-screen"){
      return player.club.toUpperCase()
    }
  }
  useEffect(()=>{
    setAvaliablePlayers(playersWithinLimits(players, theSquad, balance, playersPerClubLimit, positions))
  },[theSquad, balance, playersPerClubLimit, positions])

  const listOfPlayers = playersToMap.map((player) =>
    <li key={player.id} className={"market-player market-player-" + player.position.toLowerCase()}>
      <span className={"position-marker-" + player.position.toLowerCase()}></span>
      <span
        className="second-name"
        onClick={()=>{handleStats(player)}}>
          {player.surname}{player.name.slice(0,1) !== "" ? " " + player.name.slice(0,1) + '.' : ""} 
      </span>
      <h3 className={"club-name club-name-"+player.club.toLowerCase()}>
        {clubNameVersion(player)}
      </h3>
      <button
        disabled={!availablePlayers.includes(player)}
        onClick={() =>
          hirePlayer(
            player,
            setTheSquad,
            theSquad,
            positions
          )}
        className="price-btn" 
        id={player.id}>
        {player.price + "K"}
      </button>
    </li>).slice(visibleMarketPage*10-10, visibleMarketPage*10);

  const handlePageToggle = (pageNum) => {
    if(pageNum !== 0 && !inRange(playersToMap.length, (pageNum-2)*10, (pageNum-1)*10))
      if(visibleMarketPage>pageNum)
        setMarketListID("market-list-right");
        if(visibleMarketPage<pageNum)
          setMarketListID("market-list-left");
          setTimeout(() => setMarketListID("market-list"), 400);
          setTimeout(() => setVisibleMarketPage(pageNum), 200);
  }
  const [showGoalkeepers, setShowGoalkeepers] = useState(true)
  const [showDefenders, setShowDefenders] = useState(true)
  const [showMidfielders, setShowMidfielders] = useState(true)
  const [showForwards, setShowForwards] = useState(true)
  const [sortParameter, setSortParameter] = useState("price")
  const [sortDirectionAscending, setSortDirectionAscending] = useState(false)

  const filterByPosition = (player) => {
    if(showGoalkeepers && player.position==="gk")
      return true;
    if(showDefenders && player.position==="def")
      return true;
    if(showMidfielders && player.position==="mid")
      return true;
    if(showForwards && player.position==="fwd")
      return true;
  }
  const [searchValue, setSearchValue] = useState('')
  const filterBySearchValue = (player) => {
      const playerFullNameReversed = player.surname + " " + player.name
      const playerFullName = player.name + " " + player.surname
      const playerFullNameReversedLow = playerFullNameReversed.toLowerCase()
      const playerFullNameLow = playerFullName.toLowerCase()

      if (playerFullNameLow.includes(searchValue) ||
          playerFullNameReversedLow.includes(searchValue) ||
          playerFullName.includes(searchValue) ||
          playerFullNameReversed.includes(searchValue) ||
          searchValue === '')
          return true;
  }
  useEffect(()=>{
    setVisibleMarketPage(1)
  },[showGoalkeepers, showDefenders, showMidfielders, showForwards, searchValue])

  useEffect(()=>{
    const matchingPlayers = [];
    for(let i = 0; i < players.length; i++){
      if (filterByPosition(players[i]) &&
          filterBySearchValue(players[i])){
            matchingPlayers.push(players[i])
          }
    }
    if(sortDirectionAscending){
      setPlayersToMap(matchingPlayers.sort((player1, player2) => (player1[sortParameter] > player2[sortParameter]) ? 1 : -1))
    }
    else{
      setPlayersToMap(matchingPlayers.sort((player1, player2) => (player1[sortParameter] < player2[sortParameter]) ? 1 : -1))
    }
  },[showGoalkeepers, 
    showDefenders, 
    showMidfielders, 
    showForwards, 
    searchValue,
    sortParameter, 
    sortDirectionAscending])
  
  const resetFilters = () => {
    setShowGoalkeepers(true)
    setShowDefenders(true)
    setShowMidfielders(true)
    setShowForwards(true)
    setSearchValue('')
    setVisibleMarketPage(1)
  }

  const sortChangeHandler = (data) => {
    setSortParameter(data.parameter)
    setSortDirectionAscending(data.ascending)
  }

  const hirePlayer = (
    player,
    setTheSquad,
    theSquad,
    positions
    ) => {
    const firstFreeRole = findFirstFreeRole(positions, player, theSquad);
      if (firstFreeRole){
          theSquad.push({
            role: firstFreeRole,
            playerData: player
          })
          setTheSquad([...theSquad]);
      }
    
  }
  
  return (
    <div id={id}>
      <h1>Rynek Transferowy</h1>
      <div id="search">
        <input
          id="market-search-bar"
          type="text"
          placeholder="szukaj"
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
        />
        <select
          id="market-sorting-opener"
          className="market-sorting-option" 
          onChange={(e)=>sortChangeHandler(JSON.parse(e.target.value))}>
          <option
            className="market-sorting-option"
            value='{"parameter":"price", "ascending":false}'>
            wg ceny malejąco
          </option>
          <option
            className="market-sorting-option"
            value='{"parameter":"price", "ascending":true}'>
            wg ceny rosnąco
          </option>
          <option
            className="market-sorting-option"
            value='{"parameter":"overallPoints", "ascending":false}'>
            wg punktów malejąco
          </option>
          <option
            className="market-sorting-option"
            value='{"parameter":"overallPoints", "ascending":true}'>
            wg punktów rosnąco
          </option>
          <option
            className="market-sorting-option"
            value='{"parameter":"surname", "ascending":true}'>
            wg nazwiska A-Z
          </option>
          <option
            className="market-sorting-option"
            value='{"parameter":"surname", "ascending":false}'>
            wg nazwiska Z-A
          </option>
        </select>
        <button id="market-reset-button" 
          onClick={()=>{resetFilters()}}>reset filtrów
        </button>
        <AutoPickButton
          clubTotalValue={clubTotalValue}
          setTheSquad={setTheSquad}
          playersPerClubLimit={playersPerClubLimit}
          positions={positions}
        />
        <div id="market-position-filters">
          <div 
            id="gk-filter-border-element" 
            className="border-element" 
            onClick={()=>{setShowGoalkeepers(!showGoalkeepers)}}>
            <button
              id="gk-filter-button"
              className="market-filter-button"
              onClick={()=>{setShowGoalkeepers(!showGoalkeepers)}}
              style={showGoalkeepers ?
                {background:"linear-gradient(to left bottom, rgb(255, 174, 0), rgb(216, 148, 0))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}
              }
            >GK
            </button>
          </div>
          <div
            id="def-filter-border-element" 
            className="border-element"
            onClick={()=>{setShowDefenders(!showDefenders)}}>
            <button 
              id="def-filter-button" 
              className="market-filter-button" 
              onClick={()=>{setShowDefenders(!showDefenders)}}
              style={showDefenders ?
                {background:"linear-gradient(to left bottom, rgb(0, 255, 42), rgba(0, 167, 14))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}}
              >DEF
            </button>
          </div>
          <div 
            id="mid-filter-border-element" 
            className="border-element"
            onClick={()=>{setShowMidfielders(!showMidfielders)}}>
            <button 
              id="mid-filter-button" 
              className="market-filter-button" 
              onClick={()=>{setShowMidfielders(!showMidfielders)}} 
              style={showMidfielders
                ?
                {background:"linear-gradient(to left bottom, rgb(38, 0, 255), rgb(0, 16, 107))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}}
              >MID
            </button>
          </div>
          <div 
            id="fwd-filter-border-element" 
            className="border-element"
            onClick={()=>{setShowForwards(!showForwards)}}>
            <button 
              id="fwd-filter-button" 
              className="market-filter-button" 
              onClick={()=>{setShowForwards(!showForwards)}}
              style={showForwards
                ?
                {background:"linear-gradient(to left bottom, rgb(255, 0, 0), rgb(141, 0, 0))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}} 
              >FWD
            </button>
          </div>
        </div>
      </div>
      <ul id={marketListID}>
        <li className="market-player-label">
          <span className="second-name-label">nazwisko</span>
          <span className="club-name-label">klub</span>
          <span className="price-label">cena</span>
        </li>
        {listOfPlayers}
      </ul>
      <div id="page-toggle-bar-bottom">
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(visibleMarketPage-1)}}>
          <img src={leftArrow} alt="left"></img>
        </button>
        <input
          id="page-toggle-slide"
          type="range"
          min={1}
          max={Math.ceil(playersToMap.length/10)}
          value={visibleMarketPage}
          onChange={(e)=>handlePageToggle(parseInt(e.target.value))}>
        </input>
        <button className="page-toggle-button" onClick={()=>{handlePageToggle(visibleMarketPage+1)}}>
          <img src={rightArrow} alt="right"></img>
        </button>
      </div>
    </div>
  )
}

export default Market
