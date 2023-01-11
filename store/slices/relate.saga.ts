import { call, put, takeLatest } from "typed-redux-saga";

export function* onGetRelated() {
  yield* takeLatest("");
}

export function* relateSaga() {
  yield* call(onGetRelated);
}
