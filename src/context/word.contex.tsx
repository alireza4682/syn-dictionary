import { createContext, FC, Reducer, useReducer } from "react";
import { createAction } from "../utils/reducer.util";

export const WordContext = createContext({
  word: "",
  setWord: (_word: string) => {},
  syn: [] as synType[],
  setSyn: async (_word: string) => {},
  isLoading: false,
  setIsLoading: (_isLoading: boolean) => {},
});

export type synType = {
  word: string;
  score: number;
};

type stateType = {
  word: string;
  syn: synType[];
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
