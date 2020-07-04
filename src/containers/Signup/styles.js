import styled from 'styled-components';

export const Input = styled.input`
  margin: 10px 0;
  border: 0;
  padding: 20px 15px;

  &:focus {
    outline: 1px solid #BACD25;

  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 10px 0;
  background: #BACD25;
  border: none;
  cursor: pointer;
  padding: 12px 24px;
`;
