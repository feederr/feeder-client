import {call, put, select, takeEvery} from "redux-saga/effects";
import _ from "lodash";
import apiCallsMapping from "../api/apiCallsMapping";
import {getToken} from "../modules/Auth/selectors";
import {request} from "../api/requestConfiguration";
import {tokenForSignUp} from "../modules/Auth/constants/authRouterConstants"

function* callApi(action) {
  const { type, payload } = action;
  const requestData = apiCallsMapping(type)(payload);

  if (_.get(requestData, "headers.Authorization", true)) {
    let authValue = _.get(requestData, "headers.Authorization", true);
    if(authValue === tokenForSignUp) {
      _.set(requestData, "headers.Authorization", `Basic ${authValue}`);
    }
    else {
      const token = yield select(getToken);
      _.set(requestData, "headers.Authorization", `Bearer ${token}`);
    }
  }

  try {
    const response = yield call(request, requestData);
    const successType = action.type.replace("_REQUEST", "_SUCCESS");

    yield put({ type: successType, payload, response });
  } catch (error) {
    const failedType = action.type.replace("_REQUEST", "_FAILED");

    yield put({ type: failedType, payload, response: error.response, error });
  }
}

export default function* watchRequest() {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), callApi);
}
