import React from 'react';
import Card from '../card';

const NearbyPlaceCard = (props) => {
  return (
    <Card cardClassName="near-places__card" divClassName="near-places__image-wrapper" {...props} />
  );
};

export default NearbyPlaceCard;
