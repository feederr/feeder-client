import { combineReducers } from "redux";
import auth from "../modules/Auth/reducers";
import { reducer as toastrReducer } from "react-redux-toastr";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    auth,
    toastr: toastrReducer,
    router: connectRouter(history)
  });
