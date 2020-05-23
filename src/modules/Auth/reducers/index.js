import { combineReducers } from "redux";

import token from "./token";
import user from "./user";
import errors from "../pages/SignIn/reducers";

const reducer = combineReducers({
  token,
  user,
  errors
});

export default reducer;
