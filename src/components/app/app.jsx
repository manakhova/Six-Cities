import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main';
import SignInPage from '../sign-in-page';
import FavoritesPage from '../favorites';
import OfferPage from '../offer';
import NotFoundPage from '../not-found-page';

const App = (props) => {
  const {citiesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main citiesCount={citiesCount} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  citiesCount: PropTypes.number.isRequired,
};

export default App;
