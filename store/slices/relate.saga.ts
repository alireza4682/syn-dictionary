import { AnyAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "typed-redux-saga";

function* fetches(word: string, endpoint: string) {
  const resoponse = yield* call(() =>
    fetch(`https://api.datamuse.com/words?${endpoint}=${word}`)
  );

  yield* call(console.log, resoponse);
  const asnwer: Object[] | [] = yield* call(() => resoponse.json());

  return asnwer;
}

function* fetchExtras(action: AnyAction) {
  yield* call(console.log, action);
  const { word, endpoint } = action.payload;
  const answer = yield* call(fetches, word, endpoint);
  yield* put({ type: "relate/setRelateFetch", payload: answer });
}

export function* onGetRelated() {
  yield* takeLatest("relate/fetchRelated", fetchExtras);
}

export function* relateSaga() {
  yield* call(onGetRelated);
}
