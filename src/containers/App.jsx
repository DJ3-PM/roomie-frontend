import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import CreatePlace from './CreatePlace';
import '../assets/styles/App.scss';

const App = () => (
  <Router>
    <Home path='/' />
    <CreatePlace path='/places/create' />
  </Router>
);

export default App;
