import { createSlice } from "@reduxjs/toolkit";

type cardsType = {
  card: {
    word: string;
    score: number;
  }[];
  id: number;
}[];

const cardSlice = createSlice({
  name: "card",
  initialState: { cards: [] as cardsType },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards.filter((item) => item.id === action.payload);
    },
    removeAllCards: (state) => {
      state.cards = [];
    },
  },
});

const { actions, reducer } = cardSlice;
export const { addCard, removeCard, removeAllCards } = actions;
const cardReducer = reducer;
export default cardReducer;
