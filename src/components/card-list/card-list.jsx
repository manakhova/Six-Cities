import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardList = (props) => {
  const [, setActiveCard] = useState(null);

  const handleMouseOverCard = (id) => {
    setActiveCard(id);
  };

  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <Card offer={offer} key={offer + i} onMouseOverCard={handleMouseOverCard}/>)}
    </div>
  );
};

CardList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default CardList;

