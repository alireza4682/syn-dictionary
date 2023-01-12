import { all,call } from "redux-saga/effects";
import { wordSaga } from "./slices/word.saga";
import { relateSaga } from "./slices/relate.saga";
function* rootSaga() {
  yield call(console.log,"wtf") 
  yield all([wordSaga(), relateSaga()]);
}

export default rootSaga;
