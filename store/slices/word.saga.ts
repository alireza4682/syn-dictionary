import { all, call, put, takeEvery } from "redux-saga/effects";
import { onFetchFail, onFetchStart, onFetchSuccess } from "./word.slice";
import axios from 'axios'

export function* fetchDatamuse() {
  try {
    yield put(onFetchStart());
    const response = yield call( axios.get, [`https://api.datamuse.com/words?rel_syn=${}`]
    );
    const fetchPayload = response.json();
    yield put(onFetchSuccess(fetchPayload));
  } catch (error) {
    yield put(onFetchFail(error));
  }
}

export function* onFetchWord(): Generator<'word/onFetchStart'> {
  yield takeEvery("word/onFetchStart", fetchDatamuse);
}

export function* wordSaga() {
  yield all([onFetchWord]);
}
