<<<<<<< HEAD
import React, { createContext, useState } from "react";
export type synType = {
  score: number;
  word: string;
};
export const WordContext = createContext<{
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}>({
  word: "",
  setWord: () => null,
  isLoading: boolean,
  setIsloading: () => null,
  syn: [],
  setSyn: () => null,
=======
import { createContext, FC, Reducer, useReducer } from "react";
import { createAction } from "../utils/reducer.util";

export const WordContext = createContext({
  word: "",
  setWord: () => null,
  syn: [],
  setSyn: () => null,
  isLoadign: false,
  setIsLoading: () => null,
>>>>>>> dffa7fd586cf7bc5474746393bb1f98d339ec2f1
});

type stateType = {
  word: string;
  syn: string[];
  isLoading: boolean;
};
const INITIAL_WORD: stateType = { word: "", syn: [], isLoading: false };

const WORD_ACTION_TYPES = {
  SET_WORD: "SET_WORD",
  SET_SYN: "SET_SYN",
  SET_ISlOADING: "SET_ISlOADING",
};

const wordReducer: Reducer<stateType, any> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case WORD_ACTION_TYPES.SET_WORD:
      return { ...state, payload };
    case WORD_ACTION_TYPES.SET_SYN:
      return { ...state, payload };
    case WORD_ACTION_TYPES.SET_ISlOADING:
      return { ...state, payload };
    default:
      throw new Error(`unhandled type ${type}`);
  }
};

export const WordProvider: FC = ({ children }: any) => {
  const [{ word, syn, isLoading }, dispatch] = useReducer(
    wordReducer,
    INITIAL_WORD
  );

  const setWord = (word: string) => {
    const newWord = word;
    const payload = {
      word: newWord,
    };
    dispatch(createAction(WORD_ACTION_TYPES.SET_WORD, payload));
  };

  const value = {
    word,
    setWord,
    syn,
    setSyn,
    isLoading,
    setIsLoading,
  };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

// TODO write with useReducer
