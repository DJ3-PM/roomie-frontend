import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Signin';
import Register from '../containers/Signup';
import CreatePlace from '../containers/CreatePlace';
import CreateProfile from '../containers/CreateProfile';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Register} />
      <Route exact patch='/createplace' component={CreatePlace} />
      <Route exact path='/createprofile' component={CreateProfile} />
    </Switch>
  </BrowserRouter>
);

export default App;
