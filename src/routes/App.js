import React from 'react';
import { Router } from '@reach/router';
import Home from '../containers/Home';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import CreatePlace from '../containers/CreatePlace';
import CreateProfile from '../containers/CreateProfile';

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Signup path='/signup' />
      <Signin path='/signin' />
      <CreatePlace path='/places/create' />
      <CreateProfile path='/profile/create' />
    </Router>
  );
};

export default App;
