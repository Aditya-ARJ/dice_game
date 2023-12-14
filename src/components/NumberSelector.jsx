import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
  const array = [1, 2, 3, 4, 5, 6];
  const handler = (val) => {
    setSelectedNumber(val)
    setError("")
}
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:"end"
      }}
    >
      <Typography sx={{color:"red"}}>{ error}</Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start" // Align items to the left
        }}
      >
        {array.map((val, i) =>
          <NumberBox
            isSelected={val === selectedNumber}
            onClick={()=> handler(val)}
            key={i}
          >
            {val}
          </NumberBox>
        )}
      </Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          display: "flex",
          alignItems: "flex-end", // Align the text to the right
          marginTop: "10px" // Adjusted margin for better spacing
        }}
      >
        Select Number
      </Typography>
    </Box>
  );
};

export default NumberSelector;

const NumberBox = styled(Box)(({ isSelected }) => ({
  height: "52px",
  width: "52px",
  border: "1px solid black",
  display: "grid",
  placeItems: "center",
  fontSize: "20px",
  fontWeight: "700",
  color: isSelected ? "white" : "black",
  backgroundColor: isSelected ? "black" : "white",
  cursor: "pointer" // Add this to indicate the box is clickable
}));
