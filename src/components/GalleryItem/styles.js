import styled from 'styled-components';

export const Figure = styled.figure`
  margin: 5px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
