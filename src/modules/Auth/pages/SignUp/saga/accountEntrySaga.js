import {all, cancel, delay, fork, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {push} from "connected-react-router";
import {Routes, tokenForSignUp} from "../../../constants/authRouterConstants";
import {signOut as signOutAction} from "../../../actions/signOutAction";
import * as tokenActionCreators from "../../../actions/tokenActions";
import * as signUpActionCreators from "../actions";
import * as signInActionCreators from "../../SignIn/actions";
import moment from "moment";
import * as selectors from "../../../selectors";

function* successEntry() {
  yield put(push(Routes.HOMEPAGE));
}

function* refreshToken() {
  const isLoggedIn = yield select(selectors.getLoggedIn);
  if (!isLoggedIn) return;
  const refreshToken = yield select(selectors.getRefreshToken);
  const basicToken = tokenForSignUp;
  const tokenExpirationDateTime = yield select(
    selectors.getTokenExpirationDateTime
  );
  const now = moment();
  const refreshTokenDelay = tokenExpirationDateTime.diff(now) - 240000;

  yield delay(refreshTokenDelay);

  yield put(tokenActionCreators.refreshTokenRequest({refreshToken, token: basicToken}));
}

function* main() {
  const refToTheTask = yield fork(refreshToken);
  yield takeEvery(signOutAction, stopRefreshTokenTask(refToTheTask));
}

const stopRefreshTokenTask = bgSyncTask => {
  return function* () {
    yield cancel(bgSyncTask);
  };
};

function* getUserToken() {
  const userCredentials = yield select(selectors.getUserCredentialsForSignUp);
  yield put(signUpActionCreators.signUpRequest(userCredentials));
}

export default function* watchRequest() {
  yield all([
    takeEvery(
      [signUpActionCreators.signUpSuccess, signInActionCreators.signInSuccess],
      successEntry
    ),
    takeEvery(
      [
        signUpActionCreators.signUpSuccess,
        signInActionCreators.signInSuccess,
        tokenActionCreators.refreshTokenSuccess
      ],
      main
    ),
    takeLatest([tokenActionCreators.getClientTokenSuccess], getUserToken)
  ]);
}
