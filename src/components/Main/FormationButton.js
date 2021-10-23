import React from "react";
import formations from "./formations.js";

const FormationButton = (props) => {
  const {
    id,
    theSquad,
    formationIndex,
    newFormation,
    newFormationIndex,
    setFormationIndex,
    temporarySquad,
    setTemporarySquad
  } = props

  const changeFormation = () => {

    for(let i = 0; i <= 17; i++){
      theSquad[i] = {
        id: "",
        pointSystemId: "",
        btnId: "",
        className1: "player-bean",
        className2: "player-bean-blank",
        className3: "",
        className4: "",
        name: "",
        surname: "",
        shirtNumber: "",
        position: "",
        club: "",
        price: "",
        overallPoints: "",
        recentMatchdayPoints: "",
      }
    }
    switch (newFormationIndex) {
      case 0:
        setFormationIndex(0);
        theSquad[5].className2 = "extra-bean";
        theSquad[10].className2 = "extra-bean";
        theSquad[13].className2 = "extra-bean";
        break;
      case 1:
        setFormationIndex(1);
        theSquad[5].className2 = "extra-bean";
        theSquad[9].className2 = "extra-bean";
        theSquad[10].className2 = "extra-bean";
        break;
      case 2:
        setFormationIndex(2);
        theSquad[5].className2 = "extra-bean";
        theSquad[12].className2 = "extra-bean";
        theSquad[13].className2 = "extra-bean";
        break;
      case 3:
        setFormationIndex(3);
        theSquad[10].className2 = "extra-bean";
        theSquad[12].className2 = "extra-bean";
        theSquad[13].className2 = "extra-bean";
        break;
      case 4:
        setFormationIndex(4);
        theSquad[9].className2 = "extra-bean";
        theSquad[10].className2 = "extra-bean";
        theSquad[13].className2 = "extra-bean";
        break;
      case 5:
        setFormationIndex(5);
        theSquad[4].className2 = "extra-bean";
        theSquad[5].className2 = "extra-bean";
        theSquad[13].className2 = "extra-bean";
        break;
      case 6:
        setFormationIndex(6);
        theSquad[4].className2 = "extra-bean";
        theSquad[5].className2 = "extra-bean";
        theSquad[10].className2 = "extra-bean";
        break;
      default:
        return; 
    }
  
    for (let i = 0; i <= 17; i++) {

      if (temporarySquad[i].id !== "") {
        let position = temporarySquad[i].btnId.slice(-4, -3);

        switch (position) {
          case "g":
            if (theSquad[0].id === "") {
              theSquad[0] = temporarySquad[i];
            } else if (theSquad[14].id === "") {
              theSquad[14] = temporarySquad[i];
            }
            break;
          case "d":
            if (theSquad[1].id === "") {
              theSquad[1] = temporarySquad[i];
            } else if (theSquad[2].id === "") {
              theSquad[2] = temporarySquad[i];
            } else if (theSquad[3].id === "") {
              theSquad[3] = temporarySquad[i];
            } else if (theSquad[formations[newFormationIndex].def4].id === "") {
              theSquad[formations[newFormationIndex].def4] = temporarySquad[i];
            } else if (theSquad[formations[newFormationIndex].def5].id === "") {
              theSquad[formations[newFormationIndex].def5] = temporarySquad[i];
            }
            break;
          case "m":
            if (theSquad[6].id === "") {
              theSquad[6] = temporarySquad[i];
            } else if (theSquad[7].id === "") {
              theSquad[7] = temporarySquad[i];
            } else if (theSquad[8].id === "") {
              theSquad[8] = temporarySquad[i];
            } else if (theSquad[formations[newFormationIndex].mid4].id === "") {
              theSquad[formations[newFormationIndex].mid4] = temporarySquad[i];
            } else if (theSquad[formations[newFormationIndex].mid5].id === "") {
              theSquad[formations[newFormationIndex].mid5] = temporarySquad[i];
            }
            break;
          case "f":
            if (theSquad[11].id === "") {
              theSquad[11] = temporarySquad[i];
            } else if (theSquad[formations[newFormationIndex].fwd2].id === "") {
              theSquad[formations[newFormationIndex].fwd2] = temporarySquad[i];
            } else if (theSquad[formations[newFormationIndex].fwd3].id === "") {
              theSquad[formations[newFormationIndex].fwd3] = temporarySquad[i];
            }
            break;
          default:
            return;
        }
      }
    }
    setTemporarySquad([...theSquad])
  };

  return (
    <button
      id={id}
      className={formationIndex === newFormationIndex ? "team-data-formation-button-clicked" : "team-data-formation-button"}
      onClick={() => {
        changeFormation();
      }}
    >
      {newFormation}
    </button>
  );
};

export default FormationButton;
