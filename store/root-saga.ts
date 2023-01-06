import { all } from "redux-saga/effects";
import { wordSaga } from "./slices/word.saga";

function* rootSaga() {
  yield all([wordSaga]);
}

export default rootSaga;
