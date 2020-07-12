/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Svg = styled.svg`
  height: 50px;

  @media screen and (max-width: 375px) {
    height: auto;
    max-width: 100px;
  }
`;
