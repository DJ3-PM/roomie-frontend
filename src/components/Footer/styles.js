import styled from 'styled-components';

import { Link as LinkRouter } from '@reach/router';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  height: 50px;
`;

export const Link = styled(LinkRouter)`
  margin-left: 10px;
  color: black;
  text-decoration: none;
  
  &::before {
    content: '·';
  }
`;
