import React from "react"
import { useState } from "react/cjs/react.development";
import save from "./images/save.png";

const TeamName = (props) => {

    const {teamName,
        setTeamName,
        renameActive,
        setRenameActive} = props

    const inRange = (numberToCheck, min, max) => {
            return numberToCheck >= min && numberToCheck <= max;
    }
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
              id="team-data-teamName-container"
              onSubmit={()=>{handleRename()}}>
              <input
                id="team-data-rename-input"
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
                id="team-data-rename-save-button"
                >
                <img src={save} alt=""></img>
              </button>
            </form>
        )
    }
    else{
        return (
            <div id="team-data-teamName-container">
              <h2 
                onClick={()=>{setRenameActive(true)}}
                id="team-data-teamName"
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

export default TeamName