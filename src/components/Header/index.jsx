import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, Nav, Logo, Avatar, Ul, Li } from './styles';
import logoImg from '../../assets/static/logo.png';
import avatarImg from '../../assets/static/avatar.jpg';

const Header = () => (

  <HeaderStyle>
    <Link to='/'>
      <figure>
        <Logo src={logoImg} alt='Logo DJ3' />
      </figure>
    </Link>
    <Nav>
      <Avatar src={avatarImg} alt='Avatar' />
      <Ul>
        <Li>Anfitrión</Li>
        <Li>Huésped</Li>
      </Ul>
    </Nav>
  </HeaderStyle>

);

export default Header;
