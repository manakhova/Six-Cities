import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch(() => {
      const node = document.createElement(`div`);
      node.style = `
        font-family: var(--font);
        font-weight: 700;
        font-size: 24px;
        margin: 0 auto; 
        padding: 15px 0;
        text-align: center; `;
      node.textContent = `Failed To Load Offers`;

      const mainPage = document.querySelector(`.page__main--index`);
      document.querySelector(`.loading__container`).remove();
      mainPage.insertAdjacentElement(`afterbegin`, node);
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.setAuthorization(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.setAuthorization(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.setAuthorization({})))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => {
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data)));
};

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
);

export const addToFavorites = (id) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/1`)
    .then(({data}) => dispatch(ActionCreator.changeOfferFavoriteStatus(data)));
};

export const removeFromFavorite = (id) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/0`)
    .then(({data}) => dispatch(ActionCreator.changeOfferFavoriteStatus(data)));
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
      .then(({data}) => dispatch(ActionCreator.loadComments(data)));
};

export const postComment = (id, {comment, rating}) => (dispatch, _getState, api) => {
  api.post(`/comments/${id}`, {comment, rating})
      .then(() => dispatch(fetchComments(id)))
      .catch(() => {
        const node = document.createElement(`div`);
        node.style = `
        font-family: var(--font);
        font-weight: 700;
        font-size: 24px;
        margin: 0 auto; 
        padding: 15px 0;
        text-align: center; `;
        node.textContent = `Failed To Post Comment`;

        const form = document.querySelector(`.reviews__form`);
        form.insertAdjacentElement(`beforebegin`, node);
      });
};


