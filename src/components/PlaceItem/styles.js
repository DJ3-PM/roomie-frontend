import styled from 'styled-components';

export const Item = styled.div`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  width: 200px;
  position: relative;
  height: 360px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    -webkit-transform: scale(1.05);
              transform: scale(1.05);
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template: 300px repeat(2, auto) / 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
`;

export const Like = styled.div`
  text-align: end;
  
`;

export const Title = styled.h2`
  font-size: 15px;
  padding: 0;
  margin: 0;
  background-color: white
`;

export const Image = styled.img`
  width: inherit;
  object-fit: cover;
    height: 100%;
`;

export const Price = styled.p`
  background-color: white;
  margin: 0;
  paddin: 0;
`;

