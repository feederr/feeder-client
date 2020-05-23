import { handleActions } from "redux-actions";
import decoder from "jwt-decode";
import { signInSuccess } from "../pages/SignIn/actions";
import { signUpSuccess } from "../pages/SignUp/actions";
import { combineActions } from "redux-actions";
import { signOut } from "../actions/signOutAction";
import { loadTokenFromLocalStorage } from "../actions/tokenActions";

const defaultState = {
  role: "",
  name: "",
  id: ""
};

export default handleActions(
  {
    [combineActions(signInSuccess, signUpSuccess)](state, action) {
      return decodeToken(action.response.data.access_token);
    },
    [signOut]() {
      return defaultState;
    },
    [loadTokenFromLocalStorage](state, action) {
      return decodeToken(action.payload.accessToken);
    }
  },
  defaultState
);

const decodeToken = token => {
  const decoded = decoder(token);
  return {
    role: +decoded[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ],
    name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
    id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"]
  };
};
