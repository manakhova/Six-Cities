import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites/favorites';
import OfferPage from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {
  const {citiesCount, offers, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main citiesCount={citiesCount} offers={offers}/>
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage offers={offers}/>
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage offers={offers} comments={comments}/>
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
  offers: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
};

export default App;
