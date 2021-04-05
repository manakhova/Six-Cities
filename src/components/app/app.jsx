import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect, Router as BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import FavoritesPage from '../favorites/favorites';
import AuthScreen from '../auth-screen/auth-screen';
import OfferPage from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {getAuthorizationStatus} from '../../store/auth/selectors';


const App = ({authorizationStatus}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          {authorizationStatus === `NO_AUTH` ? <AuthScreen /> : <Redirect to={`/`}/>}
        </Route>
        <PrivateRoute exact
          path="/favorites"
          render={() => <FavoritesPage />}>
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

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(App);
