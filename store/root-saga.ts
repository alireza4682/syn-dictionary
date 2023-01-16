import { all, call } from "redux-saga/effects";
import { wordSaga } from "./slices/word.saga";
import { relateSaga } from "./slices/relate.saga";
import { relateMenuSaga } from "./slices/relateMenu.saga";
function* rootSaga() {
  yield all([wordSaga(), relateSaga(), relateMenuSaga()]);
}

export default rootSaga;
