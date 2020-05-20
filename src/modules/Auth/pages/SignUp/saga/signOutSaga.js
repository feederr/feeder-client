import { all, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import { signOut as signOutAction } from "../../../actions/signOutAction";
import { Routes } from "../../../constants/authRouterConstants";

function* signOutSuccess() {
  yield put(push(Routes.SIGNIN));
}

export default function* watchRequest() {
  yield all([takeEvery(signOutAction, signOutSuccess)]);
}
