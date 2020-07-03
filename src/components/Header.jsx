import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';

const Header = () => (

  <header className='header'>
    <figure className='logo'>
      <img src={logo} alt='Logo DJ3' width='62px' height='38px' />
    </figure>
    <nav className='header__menu'>
      <img src='./assets/img/avatar/jesusmontero.jpg' alt='' />
      <ul>
        <li><a href='#'>Anfitrión</a></li>
        <li><a href='#'>Huésped</a></li>
      </ul>
    </nav>
  </header>

);

export default Header;
