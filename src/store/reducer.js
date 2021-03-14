import {ActionType} from './action';
import offers from "../mocks/offers";

const initialState = {
  city: {
    name: `Paris`,
    lat: 48.856613,
    lng: 2.352222,
    zoom: 12},
  cityOffers: [].concat(offers).filter((offer) => offer.city.name === `Paris` && offer),
  offers
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
  }

  return state;
};


export {reducer};
