import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 30px auto;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    overflow-x: hidden;
    max-width: 940px;
    margin: 30px auto;
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

export const BtnImg = styled.img`
    width: 50px;
    height: 50px;
`;
