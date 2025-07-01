import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {

  const [score, setScore] = useState(0)
  const [SelectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState('')
  const [showRules, setShowRules] = useState(false)






  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  const rollDice = () => {
    if (!SelectedNumber) {
      setError('You have not selected any number')
      return
    }




    const randomNumber = generateRandomNumber()
    setCurrentDice((prev) => randomNumber)




    if (randomNumber === SelectedNumber) {
      setScore((prev) => prev + randomNumber)
    }
    else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
  }

  const resetGame = () => {
    setScore(0)
  }

  return (
    <Main rulesOpen={showRules}>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error} />
      </div>
      <RollDice
        currentDice={currentDice}
        rollDice={rollDice} />
      <div className="btns">
        <OutlineButton
          onClick={resetGame}
        >Reset Score</OutlineButton>
        <Button
          onClick={() => setShowRules(prev => !prev)}>
          {showRules ? 'Hide ' : 'Show '} Rules</Button>
      </div>
      {showRules && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <Rules />
            <Button className="close-btn" onClick={() => setShowRules(false)}>Close</Button>
          </div>
        </div>
      )}
    </Main>
  )
}

export default GamePlay

const Main = styled.main`
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 24px 0;
  position: relative;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    width: 100%;
    max-width: 900px;
    margin-top: 20px;
    gap: 40px;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    margin-top: 32px;
    width: 100%;
    max-width: 400px;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
  }

  .modal-content {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  @media (max-width: 900px) {
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }

  @media (max-width: 600px) {
    padding: 12px 0;
    .btns {
      gap: 12px;
      width: 100%;
      align-items: stretch;
    }
    .top_section {
      gap: 16px;
    }
    .modal-content {
      padding: 12px;
      max-width: 98vw;
      max-height: 98vh;
    }
  }
`;
