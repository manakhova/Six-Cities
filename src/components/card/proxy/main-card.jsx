import React from 'react';
import Card from '../card';

const MainCard = (props) => {
  return (
    <Card cardClassName="cities__place-card" divClassName="cities__image-wrapper" {...props} />
  );
};

export default MainCard;
