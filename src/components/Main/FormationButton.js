import React from "react";

const FormationButton = (props) => {
  const {
    id,
    theSquad,
    setFormation,
    formationName,
    newFormationIndex,
    formationIndex,
    setFormationIndex,
  } = props

  const changeFormation = () => {

    switch(formationName){
      case "4-4-2":
        setFormationIndex(0)
        setFormation({
          defenders: 4,
          midfielders: 4,
          forwards: 2
        })
        break;
      case "4-3-3":
        setFormationIndex(1)
        setFormation({
          defenders: 4,
          midfielders: 3,
          forwards: 3
        })
        break;
      case "4-5-1":
        setFormationIndex(2)
        setFormation({
          defenders: 4,
          midfielders: 5,
          forwards: 1
        })
        break;
      case "5-4-1":
        setFormationIndex(3)
        setFormation({
          defenders: 5,
          midfielders: 4,
          forwards: 1
        })
        break;
      case "5-3-2":
        setFormationIndex(4)
        setFormation({
          defenders: 5,
          midfielders: 3,
          forwards: 2
        })
        break;
      case "3-5-2":
        setFormationIndex(5)
        setFormation({
          defenders: 3,
          midfielders: 5,
          forwards: 2
        })
        break;
      case "3-4-3":
        setFormationIndex(6)
        setFormation({
          defenders: 3,
          midfielders: 4,
          forwards: 3
        })
        break;   
    }
  };

  return (
    <button
      id={id}
      className={formationIndex === newFormationIndex ? "teamdata-formation-button-clicked" : "teamdata-formation-button"}
      onClick={() => {
        changeFormation();
      }}
    >
      {formationName}
    </button>
  );
};

export default FormationButton;
