import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import wordReducer from "./slices/word.slice";
import { useDispatch } from "react-redux";
import rootSaga from "./root-saga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    word: wordReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(saga);
  },
});

saga.run(rootSaga);

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
