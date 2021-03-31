import {sortOffers} from '../utils';
import {adaptToClient} from '../adapters/offer-adapter';

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  GET_OFFERS: `main/getOffers`,
  GET_SORTED_OFFERS: `main/getSortedOffers`,
  SET_ACTIVE_CARD: `main/setActiveCard`,
  CHANGE_SORT_TYPE: `main/setSortType`,
  LOAD_OFFERS: `main/loadOffers`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_EMAIL: `user/setEmail`,
  LOAD_FAVORITES: `user/loadFavorites`,
  CHANGE_OFFER_FAVORITE_STATUS: `user/changeOfferFavoriteStatus`
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setOffers: (city, offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers.filter((offer) => offer.city.name === city.name),
  }),
  setActiveCard: (data) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: data,
  }),
  setSortedOffers: (offers, sortType) => ({
    type: ActionType.GET_SORTED_OFFERS,
    payload: sortOffers(offers, sortType),
  }),
  setSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers.map((offer) => adaptToClient(offer)),
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setEmail: (email) => ({
    type: ActionType.SET_EMAIL,
    payload: email,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites.map((offer) => adaptToClient(offer)),
  }),
  changeOfferFavoriteStatus: (offer) => ({
    type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
    payload: offer
  }),
};
