import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  
  return (
    <ScoreContainer>
      <Typography
        style={{ fontSize: "50px", lineHeight: "50px", fontWeight: "700" }}
      >
        {score}
      </Typography>
      <Typography style={{ fontSize: "20px" }}> Total Score</Typography>
    </ScoreContainer>
  );
};

export default TotalScore;
const ScoreContainer = styled(Box)({
  // height: "130px",

  width: "120px",
  textAlign: "center"
});
