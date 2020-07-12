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

export const HostServices = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     background: #ededed;
     padding: 15px;
 `;

export const HostServicesDetails = styled.div`
     display: flex;
     margin: 0 15px;
     width: 100%;
 `;

export const HostServicesImg = styled.div`
     align-self: center;
 `;

export const HostServicesName = styled.p`
     margin-left: 40px;
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
