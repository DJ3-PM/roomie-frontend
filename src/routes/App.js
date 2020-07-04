import React from 'react';

import { GlobalStyle } from '../styles/GlobalStyle'
import { Router } from '@reach/router';
import Home from '../containers/Home';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import CreatePlace from '../containers/CreatePlace';
import CreateProfile from '../containers/CreateProfile';
import ViewRoom from '../containers/ViewRoom';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Signup path='/signup' />
        <Signin path='/signin' />
        <CreatePlace path='/places/create' />
        <CreateProfile path='/profile/create' />
        <ViewRoom path='/places' />
      </Router>
    </>
  );
};

export default App;
