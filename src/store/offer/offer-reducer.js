import {ActionType} from '../action';

const initialState = {
  comments: [],
  nearbyOffers: []
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
  }

  return state;
};


export {offerReducer};
