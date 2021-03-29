import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCard from '../card/proxy/favorites-page-card';
import Header from '../header/header';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import {cities} from "../../const";

const FavoritesPage = (props) => {
  const {favorites} = props;

  const sortByCity = (offers, city) => {
    return [].concat(offers).filter((offer) => offer.city.name === city);
  };

  return (
    <div className="page">
      <Header/>
      {favorites.length === 0 ?
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        : <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city, i) => (
                  sortByCity(favorites, city.name).length !== 0 ?
                    <li key={city + i} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city.name}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {sortByCity(favorites, city.name).map((offer, k) => <FavoritesCard onMouseOverCard={() => {}} offer={offer} key={offer + k} />)}
                      </div>
                    </li> : ``
                ))}
              </ul>
            </section>
          </div>
        </main>}
      <Footer/>
    </div>
  );
};

FavoritesPage.propTypes = {
  favorites: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
