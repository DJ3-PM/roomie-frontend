import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 20px auto;
    width: 90%;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const Name = styled.h1`
    margin: 0 0 30px 0;
    text-align: center;
`;

export const DescriptionRoom = styled.section`
     background: #fefefe;
     margin: 30px;
 `;

export const DescriptionRoomText = styled.p`
     line-height: 1.5;
     text-align: justify;
 `;
