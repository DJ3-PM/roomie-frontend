import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, auto);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const H2 = styled.h2`
  grid-column: 1 / 5;
  align-self: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    grid-column: 1 / 4;
  }

  @media screen and (max-width: 375px) {
    grid-column: 1 / 3;
  }
`;
