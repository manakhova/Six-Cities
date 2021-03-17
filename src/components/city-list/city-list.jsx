import React from 'react';
import PropTypes from 'prop-types';
import {cities} from "../../const";

const CityList = (props) => {
  const {city, handleClickCity} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityItem, i) => (
            <li key={cityItem + i} className="locations__item">
              <a onClick={handleClickCity(cityItem)}
                className={`locations__item-link tabs__item 
              ${cityItem.name === city.name ? `tabs__item--active` : ``}`}
                href="#">
                <span>{cityItem.name}</span>
              </a>
            </li>))}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClickCity: PropTypes.func.isRequired,
};

export default CityList;


