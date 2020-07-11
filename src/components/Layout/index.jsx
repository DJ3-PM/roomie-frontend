import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';

import favicon from '../../assets/static/favicon.ico';

const Layout = ({ title = '', description, children }) => {
  return (
    <>
      <Helmet>
        <title>
          {`🏘 Roomeate | ${title}`}
        </title>
        <meta name='description' content={description} />
        <link rel='icon' href={favicon} type='image/x-icon' sizes='32x32' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' rel='stylesheet' />
      </Helmet>
      <Header />

      { children }

      <Footer />
    </>
  );
};

export default Layout;
