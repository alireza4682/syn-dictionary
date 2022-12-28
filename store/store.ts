import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./slices/word.slice";

const store = configureStore({
  reducer: {
    wordReducer,
  },
});

export default store;
