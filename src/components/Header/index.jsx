import React from 'react';
import { HeaderStyle, Nav, Logo, Avatar, Ul, Li, Link } from './styles';
import logoImg from '../../assets/static/logo.png';
import avatarImg from '../../assets/static/avatar.jpg';

const Header = () => (

  <HeaderStyle>
    <figure>
      <Logo src={logoImg} alt='Logo DJ3' />
    </figure>
    <Nav>
      <Avatar src={avatarImg} alt='Avatar' />
      <Ul>
        <Li><Link to='/'>Anfitrión</Link></Li>
        <Li><Link to='/'>Huésped</Link></Li>
      </Ul>
    </Nav>
  </HeaderStyle>

);

export default Header;
