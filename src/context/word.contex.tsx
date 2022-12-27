//TODO replace context with Redux

import { createContext, FC, ReactNode, Reducer, useReducer } from "react";
import { createAction } from "../utils/reducer.util";

type WordContextType = {
  word: string;
  setWord: (word: string) => void;
  syn: synType[];
  setSyn: (word: string) => Promise<void>;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export type synType = {
  word: string;
  score: number;
};

type stateType = {
  word: string;
  syn: synType[];
  isLoading: boolean;
};

interface Props {
  children?: ReactNode;
}

export const WordContext = createContext<WordContextType>({
  word: "",
  setWord: () => {},
  syn: [],
  setSyn: async () => {},
  isLoading: false,
  setIsLoading: () => {},
});

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

export const WordProvider: FC<Props> = ({ children }) => {
  const [{ word, syn, isLoading }, dispatch] = useReducer(
    wordReducer,
    INITIAL_WORD
  );

  const setIsLoading = (isLoading: boolean) => {
    dispatch(createAction(WORD_ACTION_TYPES.SET_ISlOADING, isLoading));
  };

  const setWord = (word: string) => {
    const newWord = word;
    const payload = { word: newWord };

    dispatch(createAction(WORD_ACTION_TYPES.SET_SYN, payload));
  };

  const setSyn = async (word: string) => {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
    const newSyn = (await response.json()) as synType[];
    const payload = {
      syn: newSyn,
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
