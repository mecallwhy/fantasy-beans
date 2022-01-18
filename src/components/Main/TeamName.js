import React from "react";
import { useState } from "react/cjs/react.development";
import save from "./images/save.png";
import { inRange } from "./utilities.js";

const TeamName = (props) => {

    const {teamname,
        setTeamName,
        renameActive,
        setRenameActive
    } = props

    const [newName, setNewName] = useState("");
    const handleRename = () => {
        if(inRange(newName.length, 1, 25)){
            setTeamName(newName)
            setRenameActive(false)
        }
        else if(newName.length > 25){
            alert("Ta nazwa jest trochę za długa. Kibice Cię znienawidzą, kiedy będą pisać przyśpiewki.")
        }
        else if(newName.length < 1){
            alert("Nazwa musi mieć przynajmniej jeden znak.")
        }
    }
    if(renameActive){
        return (
            <form 
              id="teamdata-teamname-container"
              onSubmit={()=>{handleRename()}}>
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
                <img src={save} alt=""></img>
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
                    teamname.length < 12 ? {fontSize: "24px"} :
                    inRange(teamname.length, 12, 17) ? {fontSize: "22px"} :
                    {fontSize: "16px"}}>
                {teamname}
              </h2>
            </div>
        )
    }
}

export default TeamName