import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 30px auto;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    overflow-x: hidden;
    position: relative;
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
    margin: 5px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    cursor: pointer;
`;

export const BtnLeftWrapper = styled.div`
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    left: 10%;
`;

export const BtnRightWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 10%;
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

export const BtnImg = styled.img`
    width: 50px;
    height: 50px;

    @media screen and (max-width: 768px) {
        width: 35px;
        height: 35px;
    }
`;
