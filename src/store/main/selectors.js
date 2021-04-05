import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.MAIN].offers;
export const getFavorites = (state) => state[NameSpace.MAIN].favorites;
export const getCity = (state) => state[NameSpace.MAIN].city;
export const getCityOffers = (state) => state[NameSpace.MAIN].cityOffers;
export const getActiveOffer = (state) => state[NameSpace.MAIN].activeOffer;
export const getSortType = (state) => state[NameSpace.MAIN].sortType;
export const getLoadedDataStatus = (state) => state[NameSpace.MAIN].isDataLoaded;
