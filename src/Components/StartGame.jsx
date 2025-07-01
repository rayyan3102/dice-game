import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="/images/dices 1.png" alt="dice" />
      </div>
      <div className='content'>
      <h1>DICE GAME</h1>
      <Button
      onClick={toggle}
      >Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
 max-width : 1180px;
 display: flex;
 margin: 0 auto;
 height: 100vh;
 align-items: center;
 justify-content: center;
 gap: 40px;

 .content h1{
  font-size: 96px;
  margin-bottom: 32px;
 }

 @media (max-width: 900px) {
  flex-direction: column;
  gap: 24px;
  height: auto;
  padding: 40px 0;
  .content h1 {
    font-size: 56px;
  }
 }

 @media (max-width: 600px) {
  flex-direction: column;
  gap: 16px;
  height: auto;
  padding: 24px 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .content h1 {
    font-size: 32px;
  }
  img {
    width: 80vw;
    max-width: 220px;
    height: auto;
    display: block;
    margin: 0 auto 16px auto;
  }
 }
`;

