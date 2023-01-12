import { createSlice } from "@reduxjs/toolkit";
export type Trelate = {
  rhyme: string[] | undefined;
  nrhyme: string[] | undefined;
  soundsLike: string[] | undefined;
  partOf: string[] | undefined;
  trigger: string[] | undefined;
};

type relateState = {
  word: string;
  relates: Trelate;
  isOpen: boolean;
};

type TsetWordAction = {
  type: string;
  payload: string;
};
type TsetIsOpen = {
  type: string;
  payload: boolean;
};
type TsetRelateAction = {
  type: string;
  payload: Trelate;
};

const relateSlice = createSlice({
  name: "relate",
  initialState: {} as relateState,
  reducers: {
    setRelateWord: (state: relateState, action: TsetWordAction) => {
      state.word = action.payload;
    },
    setIsOpen: function (state: relateState) {
      state.isOpen = !state.isOpen;
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
