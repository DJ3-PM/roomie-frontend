import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, Nav, Logo, ButtonLink, Avatar, Ul, Li, Div, LinkLi } from './styles';
import logoImg from '../../assets/static/logo.png';
import avatarImg from '../../assets/static/avatar.jpg';
import { Context } from '../../Context';

const Header = () => {
  const {
    avatar,
    isHost,
    removeIsHost,
    removeAvatar,
    removeUserId,
    removeProfileId,
    removeFirstname,
    removeLastname,
  } = useContext(Context);

  const handleLogOut = () => {
    removeIsHost();
    removeAvatar();
    removeUserId();
    removeProfileId();
    removeFirstname();
    removeLastname();
    window.location.href = '/signin';
  };

  console.log('isHost', typeof isHost);
  console.log('isHost', isHost);
  return (

    <HeaderStyle>
      <Link to='/'>
        <figure>
          <Logo src={logoImg} alt='Logo DJ3' />
        </figure>
      </Link>
      <Div>
        {
          isHost ? (
            <ButtonLink to='/create/place'>
              Create a place
            </ButtonLink>
          ) : ''
        }
        <Nav>
          {
            avatar ?
              <Avatar src={avatar} alt='Avatar' /> :
              <Avatar src={avatarImg} alt='Avatar' />
          }
          <Ul>
            <Li><LinkLi to='/favorites'>Favorites</LinkLi></Li>
            <Li><LinkLi to='#' onClick={handleLogOut}>Signout</LinkLi></Li>
          </Ul>
        </Nav>

      </Div>
    </HeaderStyle>

  );
};

export default Header;
