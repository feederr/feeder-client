import {combineActions, handleActions} from "redux-actions";
import * as signInActionCreators from "../pages/SignIn/actions";
import * as tokenActionCreators from "../actions/tokenActions";
import {signOut as signOutAction} from "../actions/signOutAction";
import moment from "moment";

const defaultState = "";
// const defaultState = {
//   accessToken: "",
//   refreshToken: "",
//   expirationDateTime: "",
//   currentUserCredentials: {}
// };
// left this comment just for understanding, what properties contained in that slice of data

const tokenReducer = handleActions(
  {
    [combineActions(
      tokenActionCreators.refreshTokenSuccess,
      signInActionCreators.signInSuccess
    )](state, action) {
      const unixTimeExpired = moment().unix() + action.response.data.expires_in;
      const token = {
        accessToken: action.response.data.access_token,
        refreshToken: action.response.data.refresh_token,
        expirationDateTime: unixTimeExpired,
      };
      localStorage.setItem("token", JSON.stringify(token));
      return token;
    },
    [tokenActionCreators.getClientTokenRequest](state, action) {
      return {...state, currentUserCredentials: action.payload.currentUserCredentials}
    },
    [tokenActionCreators.getClientTokenSuccess](state, action) {
      return {...state, accessToken: action.response.data.access_token}
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
