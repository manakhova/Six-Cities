import React from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import {getStarRating, getOfferType} from '../../utils';
import {fetchOffers, fetchFavorites, addToFavorites, removeFromFavorite} from "../../store/api-actions";
import {getAuthorizationStatus} from '../../store/auth/selectors';


const Card = (props) => {
  const {cardClassName,
    divClassName,
    offer,
    onMouseOverCard,
    authorizationStatus,
    onLoadData,
    onAddFavorite,
    onLoadFavorites,
    onRemoveFavorite} = props;

  const {id, title, previewImage, price, isPremium, isFavorite, type, rating} = offer;

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


  return (
    <article id={`${id}`} className={`${cardClassName} place-card`}
      onMouseOver={() => onMouseOverCard(offer)}
      onMouseOut={() => onMouseOverCard({id: 0})}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className={`${divClassName} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{`${price}`}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button
          ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button"
          onClick={onFavoriteClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getStarRating(Math.round(rating))}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getOfferType(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired,
  onMouseOverCard: PropTypes.func,
  cardClassName: PropTypes.string.isRequired,
  divClassName: PropTypes.string.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddFavorite(id) {
    dispatch(addToFavorites(id));
  },
  onRemoveFavorite(id) {
    dispatch(removeFromFavorite(id));
  },
  onLoadData() {
    dispatch(fetchOffers());
  },
  onLoadFavorites() {
    dispatch(fetchFavorites());
  },
});


export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);

