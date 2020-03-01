import { put, call, takeLatest, delay } from "redux-saga/effects";

import { FETCH_ALL_BOOKS } from "./actionTypes";
import { addAllBooks } from "./actions";

import { bookDb } from "../db";

const fakeFetch = () => bookDb;

const second_and_a_half = 1500;

function* fetchAllBooks({ type, payload }: any) {
  const { retryCount } = payload;

  try {
    const payload = yield call(fakeFetch);

    yield put(addAllBooks(payload));
  } catch (e) {
    yield delay(second_and_a_half);

    yield put({
      type: "ERROR_TYPE",
      payload: { loc: "rootSaga/fetchAllBooks", err: e }
    });

    if (retryCount < 5) {
      yield put({
        type: FETCH_ALL_BOOKS,
        payload: { retryCount: retryCount + 1 }
      });
    }
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_ALL_BOOKS, fetchAllBooks);
}
