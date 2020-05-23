import { createAction } from "redux-actions";

export const refreshTokenRequest = createAction("REFRESH_TOKEN_REQUEST");
export const refreshTokenSuccess = createAction("REFRESH_TOKEN_SUCCESS");
export const refreshTokenFailed = createAction("REFRESH_TOKEN_FAILED");

export const getClientTokenRequest = createAction("GET_CLIENT_TOKEN_REQUEST");
export const getClientTokenSuccess = createAction("GET_CLIENT_TOKEN_SUCCESS");
export const getClientTokenFailed = createAction("GET_CLIENT_TOKEN_FAILED");

export const loadTokenFromLocalStorage = createAction(
  "LOAD_TOKEN_FROM_LOCAL_STORAGE"
);
