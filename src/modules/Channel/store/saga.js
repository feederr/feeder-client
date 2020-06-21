import { takeEvery } from "redux-saga/effects";
import { getNewsForChannelsSuccess, redirectToNewsForChannel } from "./actions";
import { put, all } from "redux-saga/effects";

function loadStatisticsForNews(action) {
  const count = action.response.data.content.length;
  const data = action.response.data.content;
  console.log(data);
  // for (let i = 0; i < count; i++) {
  //
  // }
}

function loadStatisticsForChannel(action) {
  const count = action.response.data.content.length;
  const data = action.response.data.content;
  console.log(data);
  // for (let i = 0; i < count; i++) {
  //
  // }
}

export default function* channelSaga() {
  yield all([
    takeEvery(redirectToNewsForChannel, loadStatisticsForNews),
    takeEvery(getNewsForChannelsSuccess, loadStatisticsForChannel)
  ]);
}
