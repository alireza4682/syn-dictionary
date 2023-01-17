import { AnyAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "typed-redux-saga";

function* fetches(word: string, endpoint: string) {
  const resoponse = yield* call(() =>
    fetch(`https://api.datamuse.com/words?${endpoint}=${word}`)
  );

  const answer: Object[] | [] = yield* call(() => resoponse.json());

  yield* call(console.log, answer);
  return answer;
}

function* fetchExtras(action: AnyAction) {
  yield* call(console.log, action);
  const { word, endpoint } = action.payload;
  const answer = yield* call(fetches, word, endpoint);
  yield* call(console.log, answer);
  yield* put({ type: "relate/setRelateFetch", payload: answer });
}

export function* onGetRelated() {
  yield* takeLatest("relate/fetchRelated", fetchExtras);
}

export function* relateSaga() {
  yield* call(onGetRelated);
}
