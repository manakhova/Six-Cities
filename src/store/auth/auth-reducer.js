import {ActionType} from '../action';
import {AuthorizationStatus} from "../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_AUTHORIZATION:
      return {
        ...state,
        authorizationInfo: action.payload,
      };
  }

  return state;
};


export {authReducer};
