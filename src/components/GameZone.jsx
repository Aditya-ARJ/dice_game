import React from "react";
import { Container, Box, Button } from "@mui/material";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GameZone = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);
  const generateRandoMNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));

    return Math.floor(Math.random() * (max - min) + min);
  };
  const onRoleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandoMNumber(1, 7);
    setCurrentDice(prev => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore(prev => prev + randomNumber);
    } else {
      setScore(prev => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  const showRulesHandler = () => {
    setShowRules(bool => !bool);
  };

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setError={setError}
          setSelectedNumber={setSelectedNumber}
        />
      </Box>
      <RoleDice onRoleDice={onRoleDice} currentDice={currentDice} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Button
          onClick={resetScore}
          variant="contained"
          sx={{
            height: "30px",
            width: "160px",
            fontSize: "12px",
            margin: "24px",
            color: "black",
            backgroundColor: "white",
            border: "1px solid black",

            "&:hover": {
              backgroundColor: "black",
              border: "1px solid black",
              color: "white"
            }
          }}
        >
          Reset Score
        </Button>
        <Button
          onClick={showRulesHandler}
          variant="contained"
          sx={{
            height: "30px",
            width: "160px",

            // gap: "10px",
            fontSize: "12px",
            color: "white",
            backgroundColor: "black",
            border: "1px solid transparent",

            "&:hover": {
              backgroundColor: "white",
              border: "1px solid black",
              color: "black"
            }
          }}
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
        {showRules ? <Rules /> : ""}
      </Box>
    </Container>
  );
};

export default GameZone;
