/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: auto 1fr;
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const Constrainer = styled.div`
  height: inherit;
  overflow-y: scroll;
`;
