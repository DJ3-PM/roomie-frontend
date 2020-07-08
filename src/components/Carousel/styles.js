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
    box-sizing: initial;
    border: 5px solid transparent;
    transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
    ${(props) => {
    if (props.active) {
      return `
                border: 5px solid var(--accent-color);
                border-radius: 5px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            `;
    }
  }}
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
    background: white;
    outline: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
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
