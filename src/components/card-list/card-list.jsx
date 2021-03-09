import React from 'react';
import PropTypes from 'prop-types';


const CardList = (props) => {
  const {className} = props;
  return (
    <div className={`${className} places__list`}>
      {props.children}
    </div>
  );
};

CardList.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardList;


