/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
