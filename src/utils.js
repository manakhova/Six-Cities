import {SortType} from "./const";

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.LOW_TO_HIGH:
      return [].concat(offers).sort((offerA, offerB) => offerA.price - offerB.price);
    case SortType.HIGH_TO_LOW:
      return [].concat(offers).sort((offerA, offerB) => offerB.price - offerA.price);
    case SortType.TOP_RATED:
      return [].concat(offers).sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};
