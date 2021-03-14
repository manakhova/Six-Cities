export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  GET_OFFERS: `main/getOffers`
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setOffers: (city, offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers.filter((offer) => offer.city.name === city.name),
  })
};
