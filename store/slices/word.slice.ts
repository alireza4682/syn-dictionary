import { createSlice } from "@reduxjs/toolkit";
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
// export const fetchSyns = createAsyncThunk(
//   "word/setSyn",
//   async (word: string) => {
//     const response = await fetch(
//       `https://api.datamuse.com/words?rel_syn=${word}`
//     );
//     return (await response.json()) as synType[];
//   }
// );

type TsetWordAction = {
  type: string;
  payload: string;
};
type TonSuccessAction = {
  type: string;
  payload: synType[];
};
type TonFailAction = {
  type: string;
  payload: Error;
};

const wordSlice = createSlice({
  name: "word",
  initialState: { word: "", syn: [], cards: [] } as stateType,
  reducers: {
    setWord: (state: stateType, action: TsetWordAction) => {
      state.word = action.payload;
    },

    removeCard: (
      state: stateType,
      action: { type: string; payload: number }
    ) => {
      state.cards = state.cards.filter((_, idx) => idx !== action.payload);
    },

    removeAllCards: (state: stateType) => {
      state.cards = [];
      state.syn = [];
      state.word = "";
    },
    onFetchSuccess: (state: stateType, action: TonSuccessAction) => {
      state.cards.pop();
      state.cards.push({
        headWord: state.word,
        syn: action.payload,
        isLoading: false,
      });
    },
    onFetchFail: (state: stateType, action: TonFailAction) => {
      state.cards.push({
        headWord: state.word + `error: ${action.payload}`,
        syn: [],
        isLoading: false,
      });
    },
    onFetchStart: (state: stateType) => {
      state.cards.push({
        headWord: state.word,
        syn: [],
        isLoading: true,
      });
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchSyns.fulfilled, (state, action) => {
  //     state.cards.pop();
  //     state.cards.push({
  //       headWord: state.word,
  //       syn: action.payload,
  //       isLoading: false,
  //     });
  //   });
  //   builder.addCase(fetchSyns.pending, (state, action) => {
  //     state.cards.push({
  //       headWord: "",
  //       syn: [],
  //       isLoading: true,
  //     });
  //   });
  // },
});

const { actions, reducer } = wordSlice;
export const {
  setWord,
  removeCard,
  removeAllCards,
  onFetchStart,
  onFetchFail,
  onFetchSuccess,
} = actions;
const wordReducer = reducer;
export default wordReducer;
