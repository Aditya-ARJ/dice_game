import styled from "styled-components";
import { Box, Avatar, Typography } from "@mui/material";
const RoleDice = ({currentDice,onRoleDice}) => {
   
  return (
    <DiceContainer>
          <div style={{
              cursor:"pointer"
          }} onClick={onRoleDice} >
        <Avatar 
          alt="dice 1"
          src={`/dice_${currentDice}.png`}
          sx={{ width: "200px", height: "200px", borderRadius: "0px" }}
        />
          </div>
          <Typography
              sx={{
              fontSize:"20px",
          }}>Click on Dice to roll</Typography>
    </DiceContainer>
  );
};

export default RoleDice;
const DiceContainer = styled(Box)({
    marginTop:"30px",
  display: "flex",
    flexDirection: "column",
  alignItems:"center"
});
