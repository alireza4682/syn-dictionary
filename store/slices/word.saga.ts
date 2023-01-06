import { all, call, put, takeEvery } from "typed-redux-saga";
import { onFetchFail, onFetchStart, onFetchSuccess } from "./word.slice";

type sagaActionType = {
  type: string;
  payload: any;
};

export function* fetchDatamuse(action: sagaActionType) {
  try {
    yield* put(onFetchStart());
    const response = yield* call(() =>
      fetch(`https://api.datamuse.com/words?rel_syn=${action.payload}`)
    );
    const fetchPayload = response.json();
    yield* put(onFetchSuccess(fetchPayload));
  } catch (error) {
    yield* put(onFetchFail(error as Error));
  }
}

export function* onFetchWord() {
  yield* takeEvery("word/onFetchStart", fetchDatamuse);
}

export function* wordSaga() {
  yield* all([onFetchWord]);
}
