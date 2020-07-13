import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Context } from '../Context';
import { GlobalStyle } from '../styles/GlobalStyle';
import Home from '../containers/Home';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import CreatePlace from '../containers/CreatePlace';
import CreateProfile from '../containers/CreateProfile';
import ViewRoom from '../containers/ViewRoom';
import NotFound from '../containers/NotFound';
import Favorites from '../containers/Favorites';
import ViewProfile from '../containers/ViewProfile';

const App = () => {
  const { userId } = useContext(Context);
  const { isHost } = useContext(Context);
  const isLogged = userId && (isHost !== null);
  const isLoggedHost = isLogged && isHost;

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={isLogged ? Home : Signin} />
        <Route exact path='/signin' component={isLogged ? Home : Signin} />
        <Route exact path='/signup' component={isLogged ? Home : Signup} />
        <Route exact path='/create/place' component={isLoggedHost ? CreatePlace : Home} />
        <Route exact path='/create/profile' component={isLogged ? Home : CreateProfile} />
        <Route exact path='/places/:placeId' component={isLogged ? ViewRoom : Signin} />
        <Route exact path='/favorites' component={isLogged ? Favorites : Signin} />
        <Route exact path='/profile/:profileId' component={ViewProfile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
