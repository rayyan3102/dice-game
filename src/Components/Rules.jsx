import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="txt">
      <p>Select any number from 1 to 6.</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice number.</p>
        <p>if you get wrong guess then  2 point will be dedcuted.</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
  background-color: #FBF1F1;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
    border-radius: 10px;

  h2{
    font-size: 24px ;
    font-weight: bold;
  }
    .txt{
        margin-top: 24px;
        font-size: 18px;
        line-height: 1.5;
        color: #333;
    }

  `