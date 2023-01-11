import { AnyAction } from "@reduxjs/toolkit";
import { call, fork, put, spawn, takeLatest } from "typed-redux-saga";

function* fetches(endPoint: string, payload: string) {
  const resoponse = yield* call(() =>
    fetch(`https://api.datamuse.com/words?${endPoint}=${payload}`)
  );
  yield* call(() => resoponse.json());
}

function* fetchRelated(action: AnyAction) {
  const payload = action.payload;
  try {
    const rhyme = yield* fork(() => fetches("rel_rhy", payload));
    const apRhyme = yield* fork(() => fetches("rel_nry)", payload));
    const soundsLike = yield* fork(() => fetches("rel_hom", payload));
    const partOf = yield* fork(() => fetches("rel_par", payload));
    const trigger = yield* fork(() => fetches("rel_trg", payload));
  } catch (error) {}
}

function* fetchExtas(action: AnyAction) {
  const { rhyme, apRhyme, soundsLike, partOf, trigger } = yield* call(
    fetchRelated,
    action
  );
}

export function* onGetRelated() {
  yield* takeLatest("word/fetchRelated", fetchExtas);
}

export function* relateSaga() {
  yield* call(onGetRelated);
}
