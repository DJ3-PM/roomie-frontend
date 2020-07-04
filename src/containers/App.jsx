import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import CreatePlace from './CreatePlace';
import ViewRoom from './ViewRoom';
import '../assets/styles/App.scss';

const App = () => (
  <Router>
    <Home path='/' />
    <CreatePlace path='/places/create' />
    <ViewRoom path='places' />
  </Router>
);

export default App;
