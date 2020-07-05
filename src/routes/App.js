import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyle';
import Home from '../containers/Home';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import CreatePlace from '../containers/CreatePlace';
import CreateProfile from '../containers/CreateProfile';
import ViewRoom from '../containers/ViewRoom';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/create/place' component={CreatePlace} />
        <Route exact path='/create/profile' component={CreateProfile} />
        <Route exact path='/places/:placeId' component={ViewRoom} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
