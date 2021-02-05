import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CITIES_COUNT: 312
};

ReactDOM.render(
    <App
      citiesCount={Setting.CITIES_COUNT}
    />,
    document.querySelector(`#root`)
);
