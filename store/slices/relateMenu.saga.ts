import { AnyAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "typed-redux-saga";

function* openMenu(action: AnyAction) {
  yield* put({ type: "relate/setIsOpen", payload: false });
  yield* put({ type: "setRelateWord", payload: action.payload });
  yield* put({ type: "relate/setIsOpen", payload: true });
}

function* onGetRelateMenu() {
  yield* takeLatest("relate/openMenu", openMenu);
}

export function* relateMenuSaga() {
  yield* call(onGetRelateMenu);
}
