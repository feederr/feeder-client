import { takeEvery } from "redux-saga/effects";
import {
  getChannelsForCompilationRequest,
  getCompilationsSuccess
} from "./actions";
import { put } from "redux-saga/effects";

function* loadAdditionalInfoForCompilations(action) {
  const count = action.response.data.content.length;
  const data = action.response.data.content;
  for (let i = 0; i < count; i++) {
    yield put(getChannelsForCompilationRequest({ compilationId: data[i].id }));
  }
}

export default function* layoutSaga() {
  yield takeEvery(getCompilationsSuccess, loadAdditionalInfoForCompilations);
}
