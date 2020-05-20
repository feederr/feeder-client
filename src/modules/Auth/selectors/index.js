import moment from "moment";
import { store } from "../../../index";
import { loadTokenFromLocalStorage } from "../actions/tokenActions";
import _ from "lodash";

export const getLoggedIn = state => {
  let currentStore = state;

  if (!_.isObject(currentStore.auth.token)) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      return false;
    }
    store.dispatch(loadTokenFromLocalStorage(token));
    currentStore = store.getState();
  }

  if (_.isObject(currentStore.auth.token)) {
    const tokenExpirationDateTime = getTokenExpirationDateTime(currentStore);
    return moment().isBefore(tokenExpirationDateTime);
  }

  return false;
};

export const getOwnRole = () => {
  let state = store.getState();
  return state.auth.user.role || "";
};

export const getToken = () => {
  let state = store.getState();
  return state.auth.token.accessToken;
};
export const getRefreshToken = () => {
  let state = store.getState();
  return state.auth.token.refreshToken;
};
export const getTokenExpirationDateTime = () => {
  let state = store.getState();
  return moment.unix(state.auth.token.expirationDateTime);
};

export const getUserName = state => {
  return state.auth.user.name || "";
};

export const getUserPhotoName = state => {
  return state.auth.user.avatarPhotoName;
};
