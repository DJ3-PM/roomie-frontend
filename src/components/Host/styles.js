import styled from 'styled-components';

export const Section = styled.section`
     display: flex;
     max-width: 940px;
     margin: 40px auto;

     @media screen and (max-width: 768px) {
        flex-direction: column;
     }
 `;

export const HostInfo = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     background: #ededed;
     width: 40%;
     padding: 15px;
     @media screen and (max-width: 768px) {
        width: 85%;
        margin: 20px auto;
     }
 `;

export const HostInfoDetails = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     margin: 15px;
     width: 250px;
 `;

export const HostInfoImg = styled.img`
     width: 150px;
     height: 150px;
     border-radius: 50%;
     margin-bottom: 15px;
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

export const HostServicesImg = styled.img`
     align-self: center;
     width: 25px;
     height: 25px;
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

export const DescriptionRoom = styled.section`
     background: #fefefe;
 `;

export const DescriptionRoomInfo = styled.div`
     margin: 0 30px 30px;
 `;

export const DescriptionRoomText = styled.p`
     line-height: 1.5;
     text-align: justify;
 `;
