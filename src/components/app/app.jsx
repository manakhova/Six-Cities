import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main';

const App = (props) => {
  const {citiesCount} = props;

  return (
    <Main citiesCount={citiesCount} />
  );
};

App.propTypes = {
  citiesCount: PropTypes.number.isRequired,
};

export default App;
