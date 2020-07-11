import styled from 'styled-components';

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
  &:hover {
    font-weight: bold;
  }
`;
