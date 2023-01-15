import { AnyAction } from "@reduxjs/toolkit";
import { all, call, fork, put, spawn, takeLatest } from "typed-redux-saga";

function* fetches(word: string, endpoint: string) {
  const resoponse = yield* call(() =>
    fetch(`https://api.datamuse.com/words?${endpoint}=${word}`)
  );
  yield* call(() => resoponse.json());
}

function* fetchExtras(action: AnyAction) {
  yield* call(console.log, "dude");
  const answer = yield* call(
    fetches,
    action.payload.word,
    action.payload.endpoint
  );
  yield* put({ type: "relate/setRelateFetch", payload: answer });
}

export function* onGetRelated() {
  yield* takeLatest("relate/fetchRelated", fetchExtras);

  yield* call(console.log, "payload.word");
}

export function* relateSaga() {
  yield* call(onGetRelated);
}
