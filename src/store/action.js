import {sortOffers} from '../utils';

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  GET_OFFERS: `main/getOffers`,
  GET_SORTED_OFFERS: `main/getSortedOffers`,
  SET_ACTIVE_CARD: `main/setActiveCard`,
  CHANGE_SORT_TYPE: `main/setSortType`
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
  })
};
