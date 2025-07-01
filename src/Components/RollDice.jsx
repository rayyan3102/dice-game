import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const RollDice = ({currentDice, rollDice}) => {

    


  return (
    <DiceContainer>
      <div className="dice"
        onClick={() => {
            rollDice()
        }}
      >
        <img src={`images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 48px;
flex-direction: column;
align-items: center;

p {
  font-size: 24px;
}

.dice{
    cursor: pointer;
}

`