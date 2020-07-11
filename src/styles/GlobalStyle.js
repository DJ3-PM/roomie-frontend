/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
// TODO: Add Montserrat Font in Helmet JS

export const GlobalStyle = createGlobalStyle`

:root {
  --accent-color: #BACD25;
}

* {
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;;
    background-color: white;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  
  input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  

`;
