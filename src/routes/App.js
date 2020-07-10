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

const App = () => {
  const { userId: isLogged, isHost } = useContext(Context);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={isLogged ? Home : Signin} />
        <Route exact path='/signin' component={isLogged ? Home : Signin} />
        <Route exact path='/signup' component={isLogged ? Home : Signup} />
        <Route exact path='/create/place' component={isLogged && isHost ? CreatePlace : Home} />
        <Route exact path='/create/profile' component={isLogged && (isHost !== null) ? Home : CreateProfile} />
        <Route exact path='/places/:placeId' component={isLogged ? ViewRoom : Signin} />
        <Route exact path='/favorites' component={isLogged ? Favorites : Signin} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
