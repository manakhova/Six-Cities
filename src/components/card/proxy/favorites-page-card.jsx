import React from 'react';
import Card from '../card';

const FavoritesCard = (props) => {
  return (
    <Card cardClassName="favorites__card" divClassName="favorites__image-wrapper" {...props} />
  );
};

export default FavoritesCard;
