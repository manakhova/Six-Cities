import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import Map from '../map/map';
import MainCard from '../card/proxy/main-page-card';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const Main = (props) => {
  const {city, setCity, offers, cityOffers, setOffers} = props;

  const [, setActiveCard] = useState(null);

  const handleMouseOverCard = (data) => {
    setActiveCard(data);
  };

  const handleClickCity = (newCity) => (evt) => {
    evt.preventDefault();
    setCity(newCity);
    setOffers(newCity, offers);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <CityList city={city} handleClickCity={handleClickCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <CardList className="cities__places-list tabs__content">
                {(cityOffers).map((offer, i) => <MainCard offer={offer} key={offer + i} onMouseOverCard={handleMouseOverCard}/>)}
              </CardList>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={cityOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  citiesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  cityOffers: PropTypes.array.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  setCity: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    cityOffers: state.cityOffers,
    offers: state.offers
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
  setOffers(city, offers) {
    dispatch(ActionCreator.setOffers(city, offers));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
