import styled from 'styled-components';

export const Info = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     margin: 15px;
     width: 250px;
 `;

export const Img = styled.img`
     width: 150px;
     height: 150px;
     border-radius: 50%;
     margin-bottom: 15px;
 `;

export const About = styled.p`
    text-align: center;
`;

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ContactButton = styled.a`
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

