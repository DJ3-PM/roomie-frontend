import styled from 'styled-components';

export const Sidebar = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background: #ededed;
     margin: 30px;
     padding: 15px;
     @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 15px;
     }
 `;

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BtnContact = styled.a`
     outline: none;
     padding: 10px 20px;
     border: none;
     text-decoration: none;
     color: black;
     cursor: pointer;

     &:hover {
         font-weight: bold;
     }
 `;
