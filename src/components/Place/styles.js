/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardsContainer = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 24px;
  justify-content: center;

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;
