import { all } from "@redux-saga/core/effects";
import watchRequest from "./watchRequest";

function* rootSaga() {
    yield all([
        watchRequest()
    ]);
}

export default rootSaga;
