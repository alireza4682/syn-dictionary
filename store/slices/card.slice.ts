import { createSlice } from "@reduxjs/toolkit";

export type cardsType = {
  syn: {
    word: string;
    score: number;
  }[];
  id: number;
}[];

export type oneCardType = {
  syn: {
    word: string;
    score: number;
  }[];
  id: number;
};

const cardSlice = createSlice({
  name: "card",
  initialState: { cards: [{ syn: {}, id: 0 }] as cardsType },
  reducers: {
    addCard: (state, action) => {
      state.cards.push({ syn: action.payload, id: state.cards.length });
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
