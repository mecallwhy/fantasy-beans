import React from "react";

const FormationButton = (props) => {
  const {
    id,
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
        setFormation([
          0,
          2,
          3,
          4,
          5,
          "extraBean",
          7,
          8,
          9,
          10,
          "extraBean",
          12,
          13,
          "extraBean",
          1,
          6,
          11,
          14
        ])
        break;
      case "4-3-3":
        setFormationIndex(1)
        setFormation([
          0,
          2,
          3,
          4,
          5,
          "extraBean",
          7,
          8,
          9,
          "extraBean",
          "extraBean",
          12,
          13,
          14,
          1,
          6,
          10,
          11
        ])
        break;
      case "4-5-1":
        setFormationIndex(2)
        setFormation([
          0,
          2,
          3,
          4,
          5,
          "extraBean",
          7,
          8,
          9,
          10,
          11,
          12,
          "extraBean",
          "extraBean",
          1,
          6,
          13,
          14
        ])
        break;
      case "5-4-1":
        setFormationIndex(3)
        setFormation([
          0,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          "extraBean",
          12,
          "extraBean",
          "extraBean",
          1,
          11,
          13,
          14
        ])
        break;
      case "5-3-2":
        setFormationIndex(4)
        setFormation([
          0,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          "extraBean",
          "extraBean",
          12,
          13,
          "extraBean",
          1,
          10,
          11,
          14
        ])
        break;
      case "3-5-2":
        setFormationIndex(5)
        setFormation([
          0,
          2,
          3,
          4,
          "extraBean",
          "extraBean",
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          "extraBean",
          1,
          5,
          6,
          14
        ])
        break;
      case "3-4-3":
        setFormationIndex(6)
        setFormation([
          0,
          2,
          3,
          4,
          "extraBean",
          "extraBean",
          7,
          8,
          9,
          10,
          "extraBean",
          12,
          13,
          14,
          1,
          5,
          6,
          11
        ])
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