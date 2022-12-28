import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type synType = {
  word: string;
  score: number;
};

type stateType = {
  word: string;
  syn: synType[];
  isLoading: boolean;
};

export const fetchSyns = createAsyncThunk(
  "word/setSyn",
  async (word: string) => {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
    return (await response.json()) as synType[];
  }
);

const wordSlice = createSlice({
  name: "word",
  initialState: { word: "", syn: [], isLoading: false } as stateType,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSyns.fulfilled, (state, action) => {
      state.syn = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSyns.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

const { actions, reducer } = wordSlice;
export const { setWord } = actions;
const wordReducer = reducer;
export default wordReducer;
