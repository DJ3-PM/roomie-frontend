/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Sidebar = styled.section`
     display: flex;
     flex-direction: column;
     align-items: center;
     background: #ededed;
     margin: 30px;
     padding: 15px;
     border-radius: 5px;
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
     @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 15px;
     }
 `;
