import StartGame from "./Components/StartGame"
import "./App.css"
import GamePlay from "./Components/GamePlay";
import React, { useState } from 'react'


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted ((prev) => !prev); }
  

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame
    toggle = {toggleGamePlay}
    />
  }
    </>
  )
}

export default App
