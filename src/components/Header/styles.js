import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px 15px;
  height: 80px;
  border-bottom: 3px solid #c3d233;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  &:hover ul {
    display: block;
  }
`;

export const Logo = styled.img`
  width:62px; 
  height:38px;
`;

export const ButtonLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 5px;
  border: none;
  border-bottom: 3px solid #95a41f;
  cursor: pointer;
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
  
  &:hover {
    background: #95a41f;
    border-color: #778319;
  }
`;

export const Avatar = styled.img`
  display: flex;
  cursor: pointer;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin: 0 15px;
  object-fit: cover;
`;

export const Ul = styled.ul`
  display: none;
  background: #f4f4f4;
  width: 100px;
  height: 75px;
  list-style: none;
  position: absolute;
  top: 55px;
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
