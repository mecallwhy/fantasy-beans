import React from "react";
import { useState } from "react/cjs/react.development";
import save from "./images/save.png";
import { inRange } from "./utilities.js";

const TeamName = (props) => {

  const {
    teamName,
    setTeamName,
    renameActive,
    setRenameActive
  } = props

  const [newName, setNewName] = useState("");
  const handleRename = () => {
    if (newName.length > 25)
      alert("Ta nazwa jest trochę za długa. Kibice Cię znienawidzą, kiedy będą pisać przyśpiewki.");
    else if (newName.length < 13)
      alert("Nazwa musi mieć przynajmniej trzy znaki.");
    else{
      setTeamName(newName)
      setRenameActive(false)
    }
  }
  if (renameActive){
    return (
      <form 
        id="teamdata-teamname-container"
        onSubmit={handleRename}
        >
        <input
          id="teamdata-rename-input"
          type="text"
          placeholder="NOWA NAZWA"
          value={newName}
          onChange={(e)=>setNewName(e.target.value)}
            style={
              newName.length < 12 ? {fontSize: "24px"} :
              inRange(newName.length, 12, 17) ? {fontSize: "20px"} :
              {fontSize: "14px"}}
          >
        </input>
        <button
          type="submit"
          id="teamdata-rename-save-button"
          >
          <img src={save} alt="save"></img>
        </button>
      </form>
    )
  }
  else{
    return (
      <div id="teamdata-teamname-container">
        <h2
          onClick={()=>{setRenameActive(true)}}
          id="teamdata-teamname"
          style={
            teamName.length < 12 ? {fontSize: "24px"} :
              inRange(teamName.length, 12, 17) ? {fontSize: "22px"} :
                {fontSize: "16px"}}>
          {teamName}
        </h2>
      </div>
    )
  }
}

export default TeamName;
