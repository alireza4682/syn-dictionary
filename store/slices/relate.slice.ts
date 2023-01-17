import { createSlice } from "@reduxjs/toolkit";
import { synType } from "./word.slice";

type relateState = {
  word: string;
  relates: synType[];
  isOpen: boolean;
};

type TsetWordAction = {
  type: string;
  payload: string;
};

type TsetRelateAction = {
  type: string;
  payload: synType[];
};

const relateSlice = createSlice({
  name: "relate",
  initialState: {} as relateState,
  reducers: {
    setRelateWord: (state: relateState, action: TsetWordAction) => {
      state.word = action.payload;
    },
    setIsOpen: function (state: relateState, action) {
      state.isOpen = action.payload;
    },
    setRelateFetch: (state: relateState, action: TsetRelateAction) => {
      state.relates = action.payload;
    },
  },
});

const { actions, reducer } = relateSlice;
export const { setRelateWord, setIsOpen, setRelateFetch } = actions;

const relateReducer = reducer;
export default relateReducer;
