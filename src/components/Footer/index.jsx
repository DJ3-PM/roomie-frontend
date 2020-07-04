import React from 'react';
import { Footer, Link } from './styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>2020 JD3, Inc. All rights reserved</p>
      <Link to='/'>Privacidad</Link>
      <Link to='/'>Términos</Link>
      <Link to='/'>Platzi Master</Link>
    </Footer>
  );
};

export default FooterComponent;
