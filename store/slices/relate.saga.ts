import { AnyAction } from "@reduxjs/toolkit";
import { call, fork, put, spawn, takeLatest } from "typed-redux-saga";

function* fetchRelated(action: AnyAction) {
  try {
    const rhyme = yield* fork(() =>
      fetch(`https://api.datamuse.com/words?rel_rhy=${action.payload}`)
    );
    const apRhyme = yield* fork(() =>
      fetch(`https://api.datamuse.com/words?rel_nry=${action.payload}`)
    );
    const soundsLike = yield* fork(() =>
      fetch(`https://api.datamuse.com/words?rel_hom=${action.payload}`)
    );
    const partOf = yield* fork(() =>
      fetch(`https://api.datamuse.com/words?rel_par=${action.payload}`)
    );
    const trigger = yield* fork(() =>
      fetch(`https://api.datamuse.com/words?rel_par=${action.payload}`)
    );
  } catch (error) {}
}
const fetches = (endPoint: string, payload: string) => {
  return fetch(`https://api.datamuse.com/words?${endPoint}=${payload}`);
};

export function* onGetRelated() {
  yield* takeLatest("word/fetchRelated");
}

export function* relateSaga() {
  yield* call(onGetRelated);
}
