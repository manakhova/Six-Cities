import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import CardList from '../card-list/card-list';
import Comments from '../comment-list/comment-list';
import NotFoundPage from '../not-found-page/not-found-page';
import NewCommentForm from '../new-comment-form/new-comment-form';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import {connect} from 'react-redux';
import Map from '../map/map';
import {getStarRating, getOfferType} from '../../utils';
import NearbyPlaceCard from '../card/proxy/nearby-place-card';
import {fetchOffers, fetchComments, fetchFavorites, addToFavorites, removeFromFavorite, fetchNearbyOffers} from "../../store/api-actions";

const OfferPage = (props) => {
  const {offers,
    city,
    nearbyOffers,
    comments,
    onAddFavorite,
    onLoadComments,
    onLoadData,
    onLoadNearbyOffers,
    onLoadFavorites,
    onRemoveFavorite,
    authorizationStatus,
    isDataLoaded} = props;

  let {id} = useParams();
  const offerId = Number(id);

  const history = useHistory();

  const onFavoriteClick = (evt) => {
    evt.preventDefault();

    if (authorizationStatus === `AUTH`) {
      if (isFavorite) {
        onRemoveFavorite(id);
        onLoadFavorites();
        onLoadData();
      } else {
        onAddFavorite(id);
        onLoadFavorites();
        onLoadData();
      }
    } else {
      history.push(`/login`);
    }
  };

  useEffect(() => {
    onLoadComments(offerId);
    onLoadNearbyOffers(offerId);
    onLoadData();
    onLoadFavorites();
  }, [id]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  const currentOffer = offers.find((offer) => offer.id === offerId);

  if (currentOffer === undefined) {
    return (
      <NotFoundPage/>
    );
  }

  const {
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
    type} = currentOffer;

  const nearbyOffersWithCurrent = [...nearbyOffers, currentOffer];

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
                <button className={`property__bookmark-button button 
                ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button"
                onClick={onFavoriteClick}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStarRating(Math.round(rating))}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getOfferType(type)}
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
                <div className="property__host-user user" id={`host-${host.id}`}>
                  <div className={host.isPro ?
                    `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` :
                    `property__avatar-wrapper user__avatar-wrapper`}>
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
              {authorizationStatus === `AUTH` ? <NewCommentForm id={offerId}/> : null}
            </div>
          </div>
          <section className="property__map map">
            <Map activeOffer={currentOffer} city={city} offers={nearbyOffersWithCurrent}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList className="near-places__list">
              {nearbyOffers.map((item, i) => <NearbyPlaceCard offer={item} key={item + i} onMouseOverCard={() => {}}/>)}
            </CardList>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offers: PropTypes.array.isRequired,
  activeOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
  onLoadNearbyOffers: PropTypes.func.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    activeOffer: state.activeOffer,
    city: state.city,
    offers: state.offers,
    nearbyOffers: state.nearbyOffers,
    authorizationStatus: state.authorizationStatus,
    isDataLoaded: state.isDataLoaded,
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddFavorite(id) {
    dispatch(addToFavorites(id));
  },
  onRemoveFavorite(id) {
    dispatch(removeFromFavorite(id));
  },
  onLoadFavorites() {
    dispatch(fetchFavorites());
  },
  onLoadData() {
    dispatch(fetchOffers());
  },
  onLoadComments(id) {
    dispatch(fetchComments(id));
  },
  onLoadNearbyOffers(id) {
    dispatch(fetchNearbyOffers(id));
  }
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);

