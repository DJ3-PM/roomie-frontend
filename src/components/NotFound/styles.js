import styled from 'styled-components';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 20px;
    background: #efefef;
`;

export const Image404 = styled.img`
    width: 40%;
    height: 40%;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 100px;
    text-align: center;
`;

export const MsgError = styled.h2`
    font-size: 2rem;
    text-align: center;
`;

export const BtnBackHome = styled.a`
    margin: 25px 0;
    background: #c3d233;
    padding: 15px;
    &:hover {
        font-weight: bold;
    }
`;
