import { AnyAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "typed-redux-saga";

function* fetchDatamuse(action: AnyAction) {
  try {
    yield* put({ type: "word/onFetchStart" });

    const response = yield* call(() =>
      fetch(`https://api.datamuse.com/words?rel_syn=${action.payload}`)
    );
    const fetchPayload = yield* call(() => response.json());
    yield* put({ type: "word/onFetchSuccess", payload: fetchPayload });
  } catch (error) {
    yield* put({ type: "word/onFetchFail", payload: error as Error });
  }
}

function* onFetchWord() {
  yield* takeEvery("word/fetchWord", fetchDatamuse);
}

export function* wordSaga() {
  yield* call(onFetchWord);
}
