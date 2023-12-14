import React from "react";
import { styled } from "@mui/system";
import { Container, Avatar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const StartGame = () => {
  const nav = useNavigate();
  const navigation = () => {
    nav("/gamezone");
  }

  return (
    <MainContainer>
      <Avatar
        alt="Description"
        src="/dices.png"
        sx={{ width: "449px", height: "322px" }}
      />
      <ContentBox>
        <Text>Dice Game </Text>
        <PlayNowButton onClick={navigation}>Play Now</PlayNowButton>
      </ContentBox>
    </MainContainer>
  );
};

export default StartGame;

const MainContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
  // backgroundColor: "red"
});
const Text = styled(Typography)({
  fontSize: "56px",
  fontWeight: 700,
  lineHeight: "45px",
  whiteSpace: "nonwrap",
  paddingBottom: "10px"
});
const PlayNowButton = styled(Button)({
  width: "160px",
  height: "30px",
  padding: "10px, 18px, 20px, 18px",

  borderRadius: "0px",
  // gap: "10px",
  fontSize: "9px",
  color: "white",
  backgroundColor: "black",
  border: "1px solid transparent",

  "&:hover": {
    backgroundColor: "white",
    border: "1px solid black",
    color: "black"
  }
});
const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end"
});
