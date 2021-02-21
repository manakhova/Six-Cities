import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardList = (props) => {
  // const [activeCardId, setActiveCard] = useState(null); не понимаю, как это сделать
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content"
    // onMouseEnter={({target}) => {
    //   if (target.tagName !== `ARTICLE`) {
    //     return;
    //   }
    //   setActiveCard(target.id);
    // }}
    >
      {offers.map((offer, i) => <Card offer={offer} key={offer + i} />)}
    </div>
  );
};

CardList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default CardList;

