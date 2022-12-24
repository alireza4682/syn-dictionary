import React, { createContext, useReducer } from "react";

const WordContext = createContext([]);

const WORD_ACTOION_TYPE = {
  SEARCH_WORD: "SEARCH_WORD",
  CHANGE_WORD: "CHANGE_WORD",
  CLICK_WORD: "CLICK_WORD",
};

const word = "";
const syn = "";
const INITIAL_STATE = [{ word, syn }];

const wordReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case WORD_ACTOION_TYPE.SEARCH_WORD:
      return [...state, payload];
    case WORD_ACTOION_TYPE.CHANGE_WORD:
      return [...state];
    case WORD_ACTOION_TYPE.CLICK_WORD:
      return [...state, payload];
  }
};

export const WordProvider = ({ children }) => {
  const [{ word, syn }, dispatch] = useReducer(wordReducer, INITIAL_STATE);
  const;
};
