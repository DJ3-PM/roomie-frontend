/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
// TODO: Add Montserrat Font in Helmet JS

export const GlobalStyle = createGlobalStyle`

:root {
  --accent-color: #BACD25;
}

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;;
    background-color: white;
  }

  ::-webkit-scrollbar {
    display: none;
  }

`;
