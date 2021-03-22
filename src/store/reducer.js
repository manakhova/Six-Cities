import {ActionType} from './action';
import offers from "../mocks/offers";
import {SortType} from "../const";

const initialState = {
  offers,
  city: {
    name: `Paris`,
    lat: 48.856613,
    lng: 2.352222,
    zoom: 12},
  cityOffers: [].concat(offers).filter((offer) => offer.city.name === `Paris`),
  activeCard: 0,
  sortType: SortType.POPULAR
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
        activeCard: action.payload
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload
      };
  }

  return state;
};


export {reducer};
