import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, Nav, ButtonLink, Avatar, Ul, Li, Div, LinkLi } from './styles';
import logoImg from '../../assets/static/logo.png';
import DefaultUser from '../DefaultUser';
import Logo from '../Logo';
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
          <Logo />
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
            avatar ? (
              <>
                <Avatar src={avatar} alt='Avatar' />
                <Ul>
                  <Li><LinkLi to='/favorites'>Favorites</LinkLi></Li>
                  <Li><LinkLi to='#' onClick={handleLogOut}>Signout</LinkLi></Li>
                </Ul>
              </>
            ) : <DefaultUser />
          }
        </Nav>

      </Div>
    </HeaderStyle>

  );
};

export default Header;
