import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 20px;
    background: #efefef;
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

export const BtnBackHome = styled(Link)`
    margin: 25px 0;
    background: #c3d233;
    color: black;
    text-decoration: none;
    padding: 15px;
    &:hover {
        font-weight: bold;
    }
`;
