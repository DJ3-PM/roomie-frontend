import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome as HouseIcon } from 'react-icons/ai';
import { HeaderStyle, Nav, Logo, ButtonLink, Avatar, Ul, Li, Div } from './styles';
import logoImg from '../../assets/static/logo.png';
import avatarImg from '../../assets/static/avatar.jpg';
import { Context } from '../../Context';

const Header = () => {
  const { avatar, isHost } = useContext(Context);

  return (

    <HeaderStyle>
      <Link to='/'>
        <figure>
          <Logo src={logoImg} alt='Logo DJ3' />
        </figure>
      </Link>
      <Div>
        {
          isHost && (
            <ButtonLink to='/create/place'>
              {/* <HouseIcon color='white' size='24px' /> */}
              Create a place
            </ButtonLink>
          )
        }
        <Nav>
          {
            avatar ?
              <Avatar src={avatar} alt='Avatar' /> :
              <Avatar src={avatarImg} alt='Avatar' />
          }
          <Ul>
            <Li>Favorites</Li>
            <Li>Signout</Li>
          </Ul>
        </Nav>

      </Div>
    </HeaderStyle>

  );
};

export default Header;
