import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites/favorites';
import OfferPage from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage/>
        </Route>
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
