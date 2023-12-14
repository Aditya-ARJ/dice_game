// import { Typography } from '@mui/material';
import StartGame from "./components/StartGame";
import GameZone from "./components/GameZone";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={StartGame} />
      <Route path="/gamezone" Component={GameZone} />
    </Routes>
  );
}

export default App;
