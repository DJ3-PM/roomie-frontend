import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    overflow-x: hidden;
`;

export const ListImages = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ListItem = styled.div`
    width: 120px;
    height: 120px;
`;

export const Image = styled.img`
    margin-right: 10px;
    width: 120px;
    height: 120px;
    object-fit: cover;

`;

export const BtnLeftWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 20%;
`;

export const BtnRightWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 20%;
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    outline: none;

    &:hover {
        cursor: pointer;
        transform: scale(1.3);
    }
`;

export const ButtonLeft = styled(Button);
export const ButtonRight = styled(Button);
/*
export const ButtonRight = styled.button`
    border: none;
    background: transparent;
    outline: none;

    &:hover {
        cursor: pointer;
        transform: scale(1.3);
    }
`;
*/
export const BtnImg = styled.img`
    width: 50px;
    height: 50px;
`;