import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';
import Comments from '../comment-list/comment-list';
import Header from '../header/header';
import {cities} from '../../const';
import Map from '../map/map';
import NearbyPlaceCard from '../card/proxy/nearby-place-card';

const OfferPage = (props) => {
  const {offers, comments} = props;
  const offer = offers[1]; // как заставить отображаться предложение именно той карточки, на которую нажали?
  const city = cities[0];
  const nearbyOffers = offers.filter((item) => item !== offer);
  const {id,
    bedrooms,
    images,
    title,
    rating,
    maxAdults,
    description,
    goods,
    price,
    host,
    isPremium,
    isFavorite,
    type} = offer;

  const [, setActiveCard] = useState(null);

  const handleMouseOverCard = (data) => {
    setActiveCard(data);
  };
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property" id={`${id}`}>
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((img, i) => <div className="property__image-wrapper" key={img + i}>
                <img className="property__image" src={img} alt="Photo studio"/>
              </div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"><span>Premium</span></div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `80%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, i) => <li className="property__inside-item" key={good + i}>
                    {good}
                  </li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Comments comments={comments}/>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} offers={nearbyOffers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList className="near-places__list">
              {nearbyOffers.map((item, i) => <NearbyPlaceCard offer={item} key={item + i} handleMouseOverCard={handleMouseOverCard}/>)}
            </CardList>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offers: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
};

export default OfferPage;

