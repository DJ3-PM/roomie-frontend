import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        { children }
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
