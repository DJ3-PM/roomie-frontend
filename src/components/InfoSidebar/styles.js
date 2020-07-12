/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Sidebar = styled.section`
     display: flex;
     flex-direction: column;
     align-items: center;
     background: #ededed;
     margin: 30px;
     padding: 15px;
     @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 15px;
     }
 `;
