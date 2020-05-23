import { all } from "redux-saga/effects";
import watchRequest from "./watchRequest";
import auth from "../modules/Auth/saga";

function* rootSaga() {
  yield all([
    watchRequest(),
    auth()
  ]);
}

export default rootSaga;
