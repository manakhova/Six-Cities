import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import FavoritesPage from '../favorites/favorites';
import AuthScreen from '../auth-screen/auth-screen';
import OfferPage from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <PrivateRoute exact
          path="/favorites"
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>
        <Route exact path="/offer/:id">
          <OfferPage/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
