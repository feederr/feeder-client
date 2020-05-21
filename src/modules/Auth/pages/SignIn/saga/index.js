import { takeEvery } from "redux-saga/effects";
import { showNotification } from "../../../../shared/Toaster";
import * as actionCreators from "../actions";

function* signInFailed(action) {
  let message = action.error.message;
  yield showNotification("error", message);
}

export default function* signInSaga() {
  yield takeEvery(actionCreators.signInFailed, signInFailed);
}
