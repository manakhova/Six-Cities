import {combineReducers} from 'redux';
import {mainReducer} from './main/main-reducer';
import {authReducer} from './auth/auth-reducer';
import {offerReducer} from './offer/offer-reducer';

export const NameSpace = {
  MAIN: `MAIN`,
  AUTH: `AUTH`,
  OFFER: `OFFER`
};

export default combineReducers({
  [NameSpace.MAIN]: mainReducer,
  [NameSpace.AUTH]: authReducer,
  [NameSpace.OFFER]: offerReducer,
});
