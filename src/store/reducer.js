import {ActionType} from './action';
import {SortType, AuthorizationStatus} from "../const";

const initialState = {
  offers: [],
  favorites: [],
  city: {
    name: `Paris`,
    lat: 48.856613,
    lng: 2.352222,
    zoom: 12},
  cityOffers: [],
  activeOffer: {id: 0},
  sortType: SortType.POPULAR,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userEmail: ``,
  comments: [],
  nearbyOffers: []
};

const getOffersWithReplacedFavorite = (offers, favorite) => {
  return offers.map((offer) => {
    return offer.id === favorite.id ? {...offer, favorite} : offer;
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        cityOffers: action.payload
      };
    case ActionType.GET_SORTED_OFFERS:
      return {
        ...state,
        cityOffers: action.payload
      };
    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state,
        activeOffer: action.payload
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload
      };
    case ActionType.LOAD_ONE_OFFER:
      return {
        ...state,
        activeOffer: action.payload,
        isDataLoaded: true
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        cityOffers: [].concat(action.payload).filter((offer) => offer.city.name === state.city.name),
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload
      };
    case ActionType.CHANGE_OFFER_FAVORITE_STATUS:
      return {
        ...state,
        offers: getOffersWithReplacedFavorite(state.offers, action.payload)
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ActionType.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
  }

  return state;
};


export {reducer};
