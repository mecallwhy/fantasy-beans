import React from "react";

const FormationButton = (props) => {
  const {
    id,
    formation,
    currentFormation,
    setCurrentFormation,
  } = props;

  return (
    <button
      id={id}
      className={formation.formationIndex === currentFormation.formationIndex ? "teamdata-formation-button-clicked" : "teamdata-formation-button"}
      onClick={()=>setCurrentFormation(formation)}
    >
      {formation.formationName}
    </button>
  );
};

export default FormationButton;
