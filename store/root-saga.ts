import { all } from "redux-saga/effects";
import { wordSaga } from "./slices/word.saga";
import { relateSaga } from "./slices/relate.saga";
function* rootSaga() {
  yield all([wordSaga(), relateSaga()]);
}

export default rootSaga;
