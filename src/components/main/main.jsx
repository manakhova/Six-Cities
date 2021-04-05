import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import Map from '../map/map';
import MainCard from '../card/proxy/main-page-card';
import MainEmpty from '../main-empty/main-empty';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Sorting from '../sorting/sorting';
import {SortType} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffers} from "../../store/api-actions";
import {filterByCity, sortOffers} from '../../utils';
import {getOffers, getCity, getCityOffers, getActiveOffer, getSortType, getLoadedDataStatus} from '../../store/main/selectors';

const Main = (props) => {
  const {city,
    setCity,
    offers,
    setOffers,
    activeOffer,
    cityOffers,
    setActiveCard,
    sortType,
    setSortType,
    isDataLoaded,
    onLoadData} = props;

  const handleMouseOverCard = (data) => {
    setActiveCard(data);
  };

  const handleClickCity = (newCity) => (evt) => {
    evt.preventDefault();
    setCity(newCity);
    setOffers(filterByCity(offers, newCity));
    setSortType(SortType.POPULAR);
  };

  const handleSortTypeClick = (sort, closeSelect) => (evt) => {
    evt.preventDefault();

    setSortType(sort);
    closeSelect();
  };

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
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
        {cityOffers.length === 0 ?
          <MainEmpty/> :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
                <Sorting sortType={sortType} onSortTypeClick={handleSortTypeClick}/>
                <CardList className="cities__places-list tabs__content">
                  {(sortOffers(cityOffers, sortType)).map((offer, i) => <MainCard offer={offer} key={offer + i} onMouseOverCard={handleMouseOverCard}/>)}
                </CardList>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map activeOffer={activeOffer} city={city} offers={cityOffers}/>
                </section>
              </div>
            </div>
          </div>}
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
  setActiveCard: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    activeOffer: getActiveOffer(state),
    city: getCity(state),
    cityOffers: getCityOffers(state),
    offers: getOffers(state),
    sortType: getSortType(state),
    isDataLoaded: getLoadedDataStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
  setOffers(offers) {
    dispatch(ActionCreator.setOffers(offers));
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
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
