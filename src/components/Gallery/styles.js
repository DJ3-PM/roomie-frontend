import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px repeat(2, 1fr);
    margin: 50px;
  }
`;

export const H2 = styled.h2`
  grid-column: 1 / 5;
  align-self: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    grid-column: 1 / 4;
  }
`;
