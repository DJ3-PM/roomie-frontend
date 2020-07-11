import styled from 'styled-components';

import { Link as LinkRouter } from '@reach/router';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  height: 80px;
  padding: 0 15px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Link = styled(LinkRouter)`
  margin-left: 10px;
  color: black;
  text-decoration: none;
  
  &::before {
    content: '·';
  }
  &:hover {
    font-weight: bold;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 16px;
  }
`;
