import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, Nav, Logo, Avatar, Ul, Li } from './styles';
import logoImg from '../../assets/static/logo.png';
import avatarImg from '../../assets/static/avatar.jpg';
import { Context } from '../../Context';

const Header = () => {
  const { avatar } = useContext(Context);

  return (

    <HeaderStyle>
      <Link to='/'>
        <figure>
          <Logo src={logoImg} alt='Logo DJ3' />
        </figure>
      </Link>
      <Nav>
        {
          avatar ?
            <Avatar src={avatar} alt='Avatar' /> :
            <Avatar src={avatarImg} alt='Avatar' />
        }

        <Ul>
          <Li>Host</Li>
          <Li>Guest</Li>
        </Ul>
      </Nav>
    </HeaderStyle>

  );
};

export default Header;
