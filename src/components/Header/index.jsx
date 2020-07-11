import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome as HouseIcon } from 'react-icons/ai';
import { HeaderStyle, Nav, Logo, ButtonLink, Avatar, Ul, Li, Div } from './styles';
import logoImg from '../../assets/static/logo.png';
import avatarImg from '../../assets/static/avatar.jpg';
import DefaultUser from '../DefaultUser';
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
              {/* <HouseIcon color='white' size='24px' /> */}
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
                  <Li><Link to='/favorites'>Favorites</Link></Li>
                  <Li><Link to='#' onClick={handleLogOut}>Signout</Link></Li>
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
