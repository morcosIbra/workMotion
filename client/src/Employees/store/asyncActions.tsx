import { call, put, takeEvery } from "redux-saga/effects";

import { ActionTypes, UpdateProfile } from "./types";

import {
  fetchProfilesFailure,
  fetchProfilesSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from "./actions";
import { handleAsyncActionError } from "../../store/handleError";

import {
  fetchEmployeesRequest,
  updateEmployeeRequest,
} from "../../axios/employeesRequests";


function* fetchProfilesSaga() {
  try {
    const { data } = yield call(fetchEmployeesRequest);
    yield put(fetchProfilesSuccess(data));
  } catch (error) {
    yield put(fetchProfilesFailure(handleAsyncActionError(error)));
  }
}

function* updateProfileSaga({ payload }: UpdateProfile) {
  try {
    const { data } = yield call(updateEmployeeRequest, payload.id, payload.body);
    yield put(updateProfileSuccess(data));
  } catch (error) {
    yield put(updateProfileFailure(handleAsyncActionError(error)));
  }
}



export default function* employeesSagas() {
  yield takeEvery(ActionTypes.FETCH_PROFILES, fetchProfilesSaga);
  yield takeEvery(ActionTypes.UPDATE_PROFILE, updateProfileSaga);
}
