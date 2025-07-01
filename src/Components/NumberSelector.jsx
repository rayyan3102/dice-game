import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const NumberSelector = ({SelectedNumber, setSelectedNumber, error, setError}) => {

const array=[1, 2, 3, 4, 5, 6]
  const setSelectedNumberHandler = (value) => {
    setSelectedNumber(value)
    setError('')
  }


  return (
    <NumberSelectConatiner>
      <p className='error'>{error}</p>
    <div className='flex'>
      {array.map((value, i) => (
        <Container 
        key={i}
        isSelected={value === SelectedNumber}
        onClick={() => setSelectedNumberHandler(value)}
        >{value}</Container>
      ))}
    </div>
    <p>Select a number</p>
    </NumberSelectConatiner>
  )
}

export default NumberSelector

const NumberSelectConatiner = styled.div`
display: flex;
align-items: end;
flex-direction: column;

.error{
    color: red;
    font-size: 16px;
    margin-bottom: 8px;
}

.flex{
    display: flex;
    gap: 16px;
}

p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 16px;
}

@media (max-width: 600px) {
  .flex {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 100%;
  }
  p {
    text-align: center;
    width: 100%;
  }
}
`

const Container = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isSelected ? '#000000' : 'white')};
color: ${(props) => (props.isSelected ? 'white' : 'black')};
`