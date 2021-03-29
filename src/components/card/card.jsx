import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchFavorites, addToFavorites, removeFromFavorite} from "../../store/api-actions";


const Card = (props) => {
  const {cardClassName, divClassName, offer, onMouseOverCard, onAddFavorite, onLoadFavorites, onRemoveFavorite} = props;
  const {id, title, previewImage, price, isPremium, isFavorite, type} = offer;

  const onFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite(id);
      onLoadFavorites();
    } else {
      onAddFavorite(id);
      onLoadFavorites();
    }
  };


  return (
    <article id={`${id}`} className={`${cardClassName} place-card`}
      onMouseOver={() => onMouseOverCard(id)}
      onMouseOut={() => onMouseOverCard(0)}
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
            <span style={{width: `100%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
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
    type: PropTypes.string.isRequired
  }).isRequired,
  onMouseOverCard: PropTypes.func,
  cardClassName: PropTypes.string.isRequired,
  divClassName: PropTypes.string.isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired
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
});


export {Card};
export default connect(null, mapDispatchToProps)(Card);

