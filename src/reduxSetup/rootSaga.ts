import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import { v4 } from "uuid";

import { FETCH_DATA, ELEMENT_ADD } from "./actionTypes";

type CreateRecordT = {
  name: string;
  comment: string;
  count?: number;
};

const createNewRecord = ({ name, comment }: CreateRecordT) => ({
  id: v4(),
  name,
  comment
});

function* fetchExternalData({ payload }: Action<CreateRecordT>) {
  if (!payload.count) {
    const data = yield call(createNewRecord, payload);

    yield put({
      type: ELEMENT_ADD,
      payload: data
    });
  }
}

function* appFetchSaga() {
  yield takeLatest(FETCH_DATA, fetchExternalData);
}

export function* rootSaga() {
  yield all([fork(appFetchSaga)]);
}
