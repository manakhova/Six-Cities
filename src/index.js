import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Setting = {
  CITIES_COUNT: 312
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        citiesCount={Setting.CITIES_COUNT}
        offers={offers}
        comments={comments}
      />
    </Provider>,
    document.querySelector(`#root`)
);

