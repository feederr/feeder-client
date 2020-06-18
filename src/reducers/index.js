import { combineReducers } from "redux";
import auth from "../modules/Auth/reducers";
import { reducer as toastrReducer } from "react-redux-toastr";
import { connectRouter } from "connected-react-router";
import follow from "../modules/Follow/store/reducer";
import search from "../modules/Search/store/reducers";
import layout from "../modules/Layout/store/reducer";
import channel from "../modules/Channel/store/reducer";

export default history =>
  combineReducers({
    auth,
    follow,
    search,
    layout,
    channel,
    toastr: toastrReducer,
    router: connectRouter(history)
  });
