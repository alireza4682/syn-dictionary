import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./slices/word.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    word: wordReducer,
  },
});
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
