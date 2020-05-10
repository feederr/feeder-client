import {combineReducers} from "redux";
import auth from "../modules/Auth/store/reducers";
import {reducer as toasterReducer} from "react-redux-toastr";
import {connectRouter} from "connected-react-router";

export default (history: any) =>
    combineReducers({
        auth,
        toaster: toasterReducer,
        router: connectRouter(history)
    });
