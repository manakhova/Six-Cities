import {SortType, MAX_RATING, MAX_COMMENTS_COUNT} from "./const";

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.LOW_TO_HIGH:
      return [].concat(offers).sort((offerA, offerB) => offerA.price - offerB.price);
    case SortType.HIGH_TO_LOW:
      return [].concat(offers).sort((offerA, offerB) => offerB.price - offerA.price);
    case SortType.TOP_RATED:
      return [].concat(offers).sort((offerA, offerB) => offerB.rating - offerA.rating);
    case SortType.POPULAR:
      return offers;
    default:
      return offers;
  }
};

export const filterByCity = (offers, city) => {
  return (offers.filter((offer) => offer.city.name === city.name));
};

export const getStarRating = (rating) => {
  return (rating / MAX_RATING * 100);
};

export const getFilteredComments = (comments) => {
  return comments.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, MAX_COMMENTS_COUNT);
};

export const getOfferType = (type) => {
  return type === `room` ? `Privat Room` : type.charAt(0).toUpperCase() + type.slice(1);
};
