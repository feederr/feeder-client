import { all } from "redux-saga/effects";
import signOutSaga from "../pages/SignUp/saga/signOutSaga";
import signUpSaga from "../pages/SignUp/saga/accountEntrySaga";
import signInSaga from "../pages/SignIn/saga";

export default function* authSaga() {
  yield all([signOutSaga(), signUpSaga(), signInSaga()]);
}
