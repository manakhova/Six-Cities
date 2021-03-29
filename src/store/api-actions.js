import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.setEmail(email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => {
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data)));
};

export const addToFavorites = (id) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/1`)
    .then(({data}) => dispatch(ActionCreator.changeOfferFavoriteStatus(data)));
};

export const removeFromFavorite = (id) => (dispatch, _, api) => {
  api.post(`/favorite/${id}/0`)
    .then(({data}) => dispatch(ActionCreator.changeOfferFavoriteStatus(data)));
};
