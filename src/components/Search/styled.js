import styled from 'styled-components';

export const Hero = styled.div`
    background-image: url('../../static/bg-hero.jpg');
    background-position: center;
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const SearchItem = styled.input`
    width: 800px;
    height: 55px;
    opacity: .7;
    margin-bottom: 25px;
    background-image: url(../app/assets/icon/search.svg);
    border: none;
`;
