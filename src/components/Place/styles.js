/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardsContainer = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 24px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
