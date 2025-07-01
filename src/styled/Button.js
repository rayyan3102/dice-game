import styled from 'styled-components';



export const Button = styled.button`
border-radius: 5px;
padding: 10px 24px;
background-color: black;
color: white;
border: 1px solid black;
border-radius: 5px;
min-width:220px ;
/* max-height: 44px; */
font-weight: 600;
border: 1px solid transparent;
font-size: 16px;
cursor: pointer;
transition: 0.3s background-color ease-in;

&:hover{
  background-color:rgb(255, 255, 255);
  transition: 0.2s background-color ease-in;
  border: 1px solid black;
  color: black;
}

`;

export const OutlineButton = styled(Button)`
background-color:rgb(255, 255, 255);
color: black;
border: 1px solid black;
&:hover{
  background-color:rgb(0, 0, 0);
  transition: 0.2s background-color ease-in;
  border: 1px solid transparent;
    color: white;
}

`;