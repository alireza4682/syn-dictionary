import { AnyAction } from "@reduxjs/toolkit";
import { all, call, fork, put, spawn, takeLatest } from "typed-redux-saga";

function* fetches(endPoint: string, payload: string) {
  const resoponse = yield* call(() =>
    fetch(`https://api.datamuse.com/words?${endPoint}=${payload}`)
  );
  yield* call(() => resoponse.json());
}

function* fetchRelated(action: AnyAction) {
  const payload = action.payload;
  try {
    yield* all([
      call(fetches, "rel_rhy", payload),
      call(fetches, "rel_nry", payload),
      call(fetches, "rel_hom", payload),
      call(fetches, "rel_par", payload),
      call(fetches, "rel_trg", payload),
    ]);
  } catch (error) {}
}

function* fetchExtas(action: AnyAction) {
  yield* call(console.log,"dude")
  yield* put({ type: "relate/isOpen" });
  yield* put({ type: "relate/setRelateWord", payload: action.payload });
  const answer = yield* call(fetchRelated, action);
  yield* put({ type: "relate/setRelateFetch", payload: answer });
}

export function* onGetRelated() {
  yield* takeLatest("relate/fetchRelated", fetchExtas);
}

export function* relateSaga() {
  yield* call(console.log,"last")
  yield* call(onGetRelated);
}
