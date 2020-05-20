import { handleActions, combineActions } from "redux-actions";
import decoder from "jwt-decode";

import * as signUpActionCreators from "../pages/SignUp/actions";
import * as signInActionCreators from "../pages/SignIn/actions";
import * as tokenActionCreators from "../actions/tokenActions";
import { signOut as signOutAction } from "../actions/signOutAction";

const defaultState = "";

const tokenReducer = handleActions(
  {
    [combineActions(
      tokenActionCreators.refreshTokenSuccess,
      signUpActionCreators.signUpSuccess,
      signInActionCreators.signInSuccess
    )](state, action) {
      const decoded = decoder(action.response.data.accessToken);
      const token = {
        accessToken: action.response.data.accessToken,
        refreshToken: action.response.data.refreshToken,
        expirationDateTime: decoded["exp"]
      };
      localStorage.setItem("token", JSON.stringify(token));
      return token;
    },
    [signInActionCreators.signInFailed](state, action) {
      return defaultState;
    },
    [signOutAction]() {
      localStorage.removeItem("token");
      return defaultState;
    },
    [tokenActionCreators.loadTokenFromLocalStorage](state, action) {
      return action.payload;
    }
  },
  defaultState
);

export default tokenReducer;
