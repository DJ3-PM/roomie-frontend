import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, Nav, ButtonLink, Avatar, Ul, Li, Div, LinkLi, Figure, HomeIcon } from './styles';
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
        <Figure>
          <Logo />
        </Figure>
      </Link>
      <Div>
        {
          isHost ? (
            <ButtonLink to='/create/place'>
              <span>Create a place</span>
              <HomeIcon />
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
