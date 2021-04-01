import {sortOffers} from '../utils';
import {adaptOfferToClient} from '../adapters/offer-adapter';
import {adaptCommentToClient, adaptCommentToServer} from '../adapters/comment-adapter';

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  GET_OFFERS: `main/getOffers`,
  GET_SORTED_OFFERS: `main/getSortedOffers`,
  SET_ACTIVE_CARD: `main/setActiveCard`,
  CHANGE_SORT_TYPE: `main/setSortType`,
  LOAD_ONE_OFFER: `offer/loadOneOffer`,
  LOAD_OFFERS: `main/loadOffers`,
  LOAD_NEARBY_OFFERS: `offer/loadNearbyOffers`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_EMAIL: `user/setEmail`,
  LOAD_FAVORITES: `user/loadFavorites`,
  CHANGE_OFFER_FAVORITE_STATUS: `user/changeOfferFavoriteStatus`,
  LOAD_COMMENTS: `offer/loadComments`,
  ADD_COMMENT: `offer/addComment`
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setOffers: (city, offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers.filter((offer) => offer.city.name === city.name)
  }),
  setActiveCard: (offer) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: offer
  }),
  setSortedOffers: (offers, sortType) => ({
    type: ActionType.GET_SORTED_OFFERS,
    payload: sortOffers(offers, sortType)
  }),
  setSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  loadOneOffer: (offer) => ({
    type: ActionType.LOAD_ONE_OFFER,
    payload: adaptOfferToClient(offer)
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers.map((offer) => adaptOfferToClient(offer))
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  setEmail: (email) => ({
    type: ActionType.SET_EMAIL,
    payload: email
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites.map((offer) => adaptOfferToClient(offer))
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers.map((offer) => adaptOfferToClient(offer))
  }),
  changeOfferFavoriteStatus: (offer) => ({
    type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
    payload: offer
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments.map((comment) => adaptCommentToClient(comment))
  }),
  addComment: (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: adaptCommentToServer(comment),
  })
};
