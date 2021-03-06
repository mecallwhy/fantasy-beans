import React, { useEffect, useState} from "react";
import players from "./Players";
import RandomSquadButton from "./RandomSquadButton.js";
import rightArrow from "./images/right-arrow.png";
import leftArrow from "./images/left-arrow.png";
import { inRange } from "./utilities.js";

const Market = (props) => {

  const {
    id,
    setTheSquad,
    theSquad, 
    disabledButtons, 
    setDisabledButtons, 
    balance,
    clubTotalValue,
    setStatsToShowIndex,
    setShowStats
   } = props

  const [marketPageIndex1, setMarketPageIndex1] = useState(0)
  const [marketPageIndex2, setMarketPageIndex2] = useState(10)
  const [playersToMap, setPlayersToMap] = useState(players)
  const [visibleMarketPage, setVisibleMarketPage] = useState(1)
  const [marketListID, setMarketListID] = useState("market-list")

  const handleStats = (player)=>{
    setStatsToShowIndex(player.btnId.marketIndex)
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
      disabled={disabledButtons.includes(player.btnId)}
      onClick={() => hirePlayer(
            player.btnId,
            player.price,
            setTheSquad,
            disabledButtons, 
            setDisabledButtons, 
            balance,
            theSquad)} 
      className="price-btn" 
      id={player.btnId.marketIndex}>
      {player.price + "K"}
    </button>
  </li>).slice(marketPageIndex1, marketPageIndex2);

  const handlePageToggle = (pageNum) => {
    const marketPageIndex1 = pageNum*10-10
    const marketPageIndex2 = pageNum*10
    if(pageNum !== 0 && !inRange(playersToMap.length, (pageNum-2)*10, (pageNum-1)*10)){
      if(visibleMarketPage>pageNum){
        setMarketListID("market-list-right")
      }
      if(visibleMarketPage<pageNum){
        setMarketListID("market-list-left")
      }
      setTimeout(() => {
        setMarketListID("market-list")
      }, 400)
      setTimeout(() => {
        setMarketPageIndex1(marketPageIndex1)
        setMarketPageIndex2(marketPageIndex2)
        setVisibleMarketPage(pageNum)
      } , 200);
    }
  }

  const [showGoalkeepers, setShowGoalkeepers] = useState(true)
  const [showDefenders, setShowDefenders] = useState(true)
  const [showMidfielders, setShowMidfielders] = useState(true)
  const [showForwards, setShowForwards] = useState(true)
  const [sortParameter, setSortParameter] = useState("price")
  const [sortDirectionAscending, setSortDirectionAscending] = useState(false)

  const filterByPosition = (player) => {
    if(showGoalkeepers && player.position==="Gk"){
      return true
    }
    if(showDefenders && player.position==="Def"){
      return true
    }
    if(showMidfielders && player.position==="Mid"){
      return true
    }
    if(showForwards && player.position==="Fwd"){
      return true
    }
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
        searchValue === ''){
          return true
      }
  }
  useEffect(()=>{
    setMarketPageIndex1(0)
    setMarketPageIndex2(10)
    setVisibleMarketPage(1)
  },[showGoalkeepers, showDefenders, showMidfielders, showForwards, searchValue])

  useEffect(()=>{
    const matchingPlayers = []
    for(let i = 0; i < players.length; i++){
      if(
        filterByPosition(players[i])
        && filterBySearchValue(players[i])){
        matchingPlayers.push(players[i])
      }
    }
    setPlayersToMap(matchingPlayers)

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
    setMarketPageIndex1(0)
    setMarketPageIndex2(10)
    setVisibleMarketPage(1)
  }

  const sortChangeHandler = (data) => {
    setSortParameter(data.parameter)
    setSortDirectionAscending(data.ascending)
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
                wg ceny malej??co
              </option>
              <option 
                className="market-sorting-option"
                value='{"parameter":"price", "ascending":true}'>
                wg ceny rosn??co
              </option>
              <option 
                className="market-sorting-option"
                value='{"parameter":"overallPoints", "ascending":false}'>
                wg punkt??w malej??co
              </option>
              <option 
                className="market-sorting-option"
                value='{"parameter":"overallPoints", "ascending":true}'>
                wg punkt??w rosn??co
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
              onClick={()=>{resetFilters()}}>reset filtr??w
            </button>
            <RandomSquadButton
              theSquad={theSquad}
              clubTotalValue={clubTotalValue}
              setTheSquad={setTheSquad}
              setDisabledButtons={(data) => setDisabledButtons(data)}
            />
        <div id="market-position-filters">
          <div 
            id="gk-filter-border-element" 
            className="border-element" 
            onClick={()=>{setShowGoalkeepers(!showGoalkeepers)}}>
            <button 
              style={showGoalkeepers
                ?
                {background:"linear-gradient(to left bottom, rgb(255, 174, 0), rgb(216, 148, 0))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}}
              id="gk-filter-button" 
              className="market-filter-button" 
              onClick={()=>{setShowGoalkeepers(!showGoalkeepers)}}>GK
            </button>
          </div>
          <div 
            id="def-filter-border-element" 
            className="border-element"
            onClick={()=>{setShowDefenders(!showDefenders)}}>
            <button 
              style={showDefenders
                ?
                {background:"linear-gradient(to left bottom, rgb(0, 255, 42), rgba(0, 167, 14))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}} 
              id="def-filter-button" 
              className="market-filter-button" 
              onClick={()=>{setShowDefenders(!showDefenders)}}>DEF
            </button>
          </div>
          <div 
            id="mid-filter-border-element" 
            className="border-element"
            onClick={()=>{setShowMidfielders(!showMidfielders)}}>
            <button 
              style={showMidfielders
                ?
                {background:"linear-gradient(to left bottom, rgb(38, 0, 255), rgb(0, 16, 107))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}} 
              id="mid-filter-button" 
              className="market-filter-button" 
              onClick={()=>{setShowMidfielders(!showMidfielders)}}>MID
            </button>
          </div>
          <div 
            id="fwd-filter-border-element" 
            className="border-element"
            onClick={()=>{setShowForwards(!showForwards)}}>
            <button 
              style={showForwards
                ?
                {background:"linear-gradient(to left bottom, rgb(255, 0, 0), rgb(141, 0, 0))", 
                color:"white",
                fontSize:".7em"}
                :
                {background:"white"}} 
              id="fwd-filter-button" 
              className="market-filter-button" 
              onClick={()=>{setShowForwards(!showForwards)}}>FWD
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
        {listOfPlayers}</ul>
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

const hirePlayer = (
  btnId,
  price,
  setTheSquad,
  disabledButtons, 
  setDisabledButtons, 
  balance,
  theSquad
  ) => {

  let withinBudget = false;
  let withinClubLimit = false;

    if(price <= balance){
      withinBudget = true;
    }
    else{
      alert("Potrzebujesz " + price + " Kredyt??w, by kupi?? tego zawodnika, a masz tylko " + Math.round(balance *10)/10 + "K. Wstawaj wcze??niej, zrezygnuj z awokado i cynamonowego latte, albo sprzedaj kt??rego?? zawodnika by zwolni?? ??rodki na koncie.")
      return {...theSquad}
    }
    
    if(disabledButtons.filter(button => button.club === btnId.club).length<3){
      withinClubLimit = true;
    }
    else{
      alert("Mo??esz mie?? maksymalnie trzech zawodnik??w z jednego klubu w szerokiej kadrze.")
      return {...theSquad}
    }

    if(withinBudget && withinClubLimit){
      if(btnId.position === "g" && theSquad.goalkeepers.length < 2){
        theSquad.goalkeepers.push(players[btnId.marketIndex])
      }
      else if(btnId.position === "d" && theSquad.defenders.length < 5){
        theSquad.defenders.push(players[btnId.marketIndex])
      }
      else if(btnId.position === "m" && theSquad.midfielders.length < 5){
        theSquad.midfielders.push(players[btnId.marketIndex])
      } 
      else if(btnId.position === "f" && theSquad.forwards.length < 3){
        theSquad.forwards.push(players[btnId.marketIndex])
      }
      else{
        alert("Mo??esz mie?? maksymalnie dw??ch bramkarzy, pi??ciu obro??c??w, pi??ciu pomocnik??w i trzech napastnik??w w szerokiej kadrze.")
        return {...theSquad}
      }
      disabledButtons.push(btnId)
      setDisabledButtons([...disabledButtons])
      setTheSquad(theSquad)
    }
}

export default Market
