import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 10px 0;
  background-color: transparent;
  border: solid 2px #000000;
  cursor: pointer;
  padding: 12px 24px;
  font-size: 20px;
  &:hover {
    font-weight: bold;
  }
  border-radius: 10px;
  margin-top: 2rem;
  &:hover { transition: linear 0.2s;
    border: solid 2px #87E31E;
    background-color: transparent;
    color: #000000;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);;
   }
`;
