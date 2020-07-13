import styled from 'styled-components';
import { RiHomeGearLine as Home } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  height: 80px;
  border-bottom: 3px solid #c3d233;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  &:hover ul {
    display: block;
  }
`;

export const Figure = styled.figure`
  @media screen and (max-width: 375px) {
    margin:0;
  }
`;

export const Logo = styled.img`
  width: 62px;
  height: 38px;
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
  cursor: pointer;
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;
  
  &:hover {
    background: #95a41f;
    border-color: #778319;
  }
  @media screen and (max-width: 375px) {
    padding: 6px;
    text-align: center;

    & span {
      display: none;
    }
  }
`;

export const HomeIcon = styled(Home)`
  display:none;
  font-size: 28px;

  @media screen and (max-width: 375px) {
    display: block;
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
  list-style: none;
  position: absolute;
  top: 55px;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  &:hover {
    display: block;
  }
`;

export const Li = styled.li`
  text-align: center;
  padding: 12px 10px;
  &:nth-child(2) {
    border-top: 2px solid #c3d233;
  }
`;

export const LinkLi = styled(RouterLink)`
  text-decoration: none;
  color: black;
  :hover {
    font-weight: bold;
  }
`;
