import { all } from "redux-saga/effects";
import watchRequest from "./watchRequest";
import auth from "../modules/Auth/saga";
import layout from "../modules/Layout/store/saga";

function* rootSaga() {
  yield all([watchRequest(), auth(), layout()]);
}

export default rootSaga;
