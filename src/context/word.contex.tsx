import { createContext, FC, Reducer, useReducer } from "react";
import { createAction } from "../utils/reducer.util";

export const WordContext = createContext({
  word: "",
  setWord: async () => null,
  syn: [] as string[],
  isLoading: false,
  setIsLoading: () => null,
});

type stateType = {
  word: string;
  syn: string[];
  isLoading: boolean;
};
const INITIAL_WORD: stateType = { word: "", syn: [], isLoading: false };

const WORD_ACTION_TYPES = {
  SET_WORD: "SET_WORD",
  SET_ISlOADING: "SET_ISlOADING",
};

const wordReducer: Reducer<stateType, any> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case WORD_ACTION_TYPES.SET_WORD:
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

  const setWord = async (word: string) => {
    setIsLoading(true);
    const newWord = word;
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
    const newSyn = await response.json();
    const payload = {
      word: newWord,
      syn: newSyn,
    };
    dispatch(createAction(WORD_ACTION_TYPES.SET_WORD, payload));
    setIsLoading(false);
  };

  const value = {
    word,
    setWord,
    syn,
    isLoading,
    setIsLoading,
  };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

// TODO write with useReducer
