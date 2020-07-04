import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  height: 80px;
  border-bottom: 3px solid #c3d233;
`;

export const Nav = styled.nav`
  &:hover ul {
    display: block;
  }
`;

export const Logo = styled.img`
  width:62px; 
  height:38px;
`;

export const Avatar = styled.img`
  display: flex;
  cursor: pointer;
  width: 62px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const Ul = styled.ul`
  display: none;
  background: #f4f4f4;
  width: 100px;
  height: 75px;
  list-style: none;
  position: absolute;
  top: 72px;
  right: 30px;
  padding: 0;
  
  &:hover {
    display: block;
  }
`;

export const Li = styled.li`
  margin: 10px;
  &:nth-child(2) {
    border-top: 2px solid #c3d233;
  }
`;

export const Link = styled(LinkRouter)`
  color: black;
  text-decoration: none;
  padding: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;
