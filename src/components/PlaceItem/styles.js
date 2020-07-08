import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: 250px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const Button = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: white;
  border-radius: 50%;
  border: none;
  top: 10px;
  right: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor: pointer;
`;

export const Item = styled.div`
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 5px;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.05);
  }
`;

export const Details = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin: 5px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--accent-color);
`;

export const Location = styled.p`
  text-transform: capitalize;
  color: gray;
`;

export const Price = styled.p`
  background: var(--accent-color);
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 30px;
`;

