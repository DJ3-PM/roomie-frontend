import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    height: 200px;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
    background: white;
    box-shadow: 3px 3px 3px #667;
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

export const BtnModalClose = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    text-decoration: none;
    color: black;
    background: red;
    border: none;
    cursor: pointer;
`;

export const BtnModalOK = styled.button`
    position: absolute;
    top: 130px;
    padding: 10px 25px;
    border-radius: 5px;
    background: #3981CC;
    border: 3px solid lightgray;
    outline: none;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        transform: scale(1.1);
    }
`;

export const Message = styled.p`
    position: absolute;
    font-weight: bold;
    top: 40px;
`;
