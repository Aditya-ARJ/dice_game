import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const Rules = () => {
  return (
    <RulesContainer>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "800",
          marginBottom: "10px"
        }}
      >
        How to play dice game
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500"
        }}
      >
        Select any number
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500"
        }}
      >
        Click on dice image
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500"
        }}
      >
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500"
        }}
      >
        if you get wrong guess then 2 point will be dedcuted{" "}
      </Typography>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled(Box)({
  backgroundColor: "#FBF1F1",
  padding: "15px",
  marginBottom: "20px",
  marginTop: "20px"
});
