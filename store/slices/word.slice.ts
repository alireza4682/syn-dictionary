import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type synType = {
  word: string;
  score: number;
};

export type oneCardType = {
  headWord: string;
  syn: synType[];
  isLoading: boolean;
};

type stateType = {
  word: string;
  syn: synType[];
  cards: oneCardType[];
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
  initialState: { word: "", syn: [], isLoading: false, cards: [] } as stateType,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },

    removeCard: (state, action) => {
      state.cards = state.cards.filter(
        (item) => item.headWord !== action.payload
      );
      console.log(state.cards);
    },

    removeAllCards: (state) => {
      state.cards = [];
      state.syn = [];
      state.word = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSyns.fulfilled, (state, action) => {
      state.cards.pop();
      state.cards.push({
        headWord: state.word,
        syn: action.payload,
        isLoading: false,
      });
    });
    builder.addCase(fetchSyns.pending, (state, action) => {
      state.cards.push({
        headWord: "",
        syn: [],
        isLoading: true,
      });
    });
  },
});

const { actions, reducer } = wordSlice;
export const { setWord, removeCard, removeAllCards } = actions;
const wordReducer = reducer;
export default wordReducer;
