import {NameSpace} from '../root-reducer';

export const getComments = (state) => state[NameSpace.OFFER].comments;
export const getNearbyOffers = (state) => state[NameSpace.OFFER].nearbyOffers;
