import { takeEvery } from "redux-saga/effects";
import { showNotification } from "../../../../shared/Toaster";
import * as actionCreators from "../actions";

function* signInFailed(action) {
  yield showNotification("error", "Smth happen");
}

export default function* signInSaga() {
  yield takeEvery(actionCreators.signInFailed, signInFailed);
}
