import { call } from "redux-saga/effects";
import { wordSaga } from "./slices/word.saga";

function* rootSaga() {
  yield call(wordSaga);
}

export default rootSaga;
