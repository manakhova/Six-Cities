import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';

const Setting = {
  CITIES_COUNT: 312
};

ReactDOM.render(
    <App
      citiesCount={Setting.CITIES_COUNT}
      offers={offers}
      comments={comments}
    />,
    document.querySelector(`#root`)
);
