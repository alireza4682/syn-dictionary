import { AnyAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "typed-redux-saga";

function* openMenu(action: AnyAction) {
  yield* put({ type: "relate/setIsOpen" });
  yield* put({ type: "setRelateWord", payload: action.payload });
  yield* put({ type: "relate/setIsOpen" });
}

function* onGetRelateMenu() {
  yield* takeLatest("relate/openMenu", openMenu);
}

export default function* relateMenuSaga() {
  yield* call(onGetRelateMenu);
}
