import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import Map from '../map/map';
import MainCard from '../card/proxy/main-page-card';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Sorting from '../sorting/sorting';
import {SortType} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFavorites, fetchOffers} from "../../store/api-actions";

const Main = (props) => {
  const {city,
    setCity,
    offers,
    setOffers,
    setSortedOffers,
    activeOffer,
    cityOffers,
    setActiveCard,
    sortType,
    setSortType,
    isDataLoaded,
    onLoadData,
    onLoadFavorites} = props;

  const handleMouseOverCard = (data) => {
    setActiveCard(data);
  };

  const handleClickCity = (newCity) => (evt) => {
    evt.preventDefault();
    setCity(newCity);
    setOffers(newCity, offers);
    setSortType(SortType.POPULAR);
  };

  const handleSortTypeClick = (sort, closeSelect) => (evt) => {
    evt.preventDefault();
    setSortType(sort);
    setSortedOffers(cityOffers, sort);

    closeSelect();
  };

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
      onLoadFavorites();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


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
              <Sorting sortType={sortType} onSortTypeClick={handleSortTypeClick}/>
              <CardList className="cities__places-list tabs__content">
                {(cityOffers).map((offer, i) => <MainCard offer={offer} key={offer + i} onMouseOverCard={handleMouseOverCard}/>)}
              </CardList>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map activeOffer={activeOffer} city={city} offers={cityOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  activeOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  offers: PropTypes.array.isRequired,
  cityOffers: PropTypes.array.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  sortType: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
  setSortType: PropTypes.func.isRequired,
  setSortedOffers: PropTypes.func.isRequired,
  setActiveCard: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onLoadFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    activeOffer: state.activeOffer,
    city: state.city,
    cityOffers: state.cityOffers,
    offers: state.offers,
    sortType: state.sortType,
    isDataLoaded: state.isDataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
  setOffers(city, offers) {
    dispatch(ActionCreator.setOffers(city, offers));
  },
  setSortedOffers(offers, sortType) {
    dispatch(ActionCreator.setSortedOffers(offers, sortType));
  },
  setSortType(sortType) {
    dispatch(ActionCreator.setSortType(sortType));
  },
  setActiveCard(data) {
    dispatch(ActionCreator.setActiveCard(data));
  },
  onLoadData() {
    dispatch(fetchOffers());
  },
  onLoadFavorites() {
    dispatch(fetchFavorites());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
