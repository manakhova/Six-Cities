import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MainCard from '../card/proxy/main-page-card';
import Card from '../card/card';
import NearbyPlaceCard from '../card/proxy/nearby-place-card';

const getCardListByType = (className, offers, cardHandle) => {
  switch (className) {
    case `cities__places-list tabs__content`:
      return offers.map((offer, i) => <MainCard offer={offer} key={offer + i} onMouseOverCard={cardHandle}/>);
    case `near-places__list`:
      return offers.map((offer, i) => <NearbyPlaceCard offer={offer} key={offer + i} onMouseOverCard={cardHandle}/>);
  }
  return offers.map((offer, i) => <Card cardClassName="" divClassName="" offer={offer} key={offer + i} onMouseOverCard={cardHandle}/>);
};

const CardList = (props) => {
  const [, setActiveCard] = useState(null);

  const handleMouseOverCard = (id) => {
    setActiveCard(id);
  };

  const {className, offers} = props;
  return (
    <div className={`${className} places__list`}>
      {getCardListByType(className, offers, handleMouseOverCard)}
    </div>
  );
};

CardList.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

export default CardList;

