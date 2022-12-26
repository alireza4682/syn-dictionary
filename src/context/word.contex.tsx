import { createContext, ReactNode, useState, FC } from "react";

export const WordContext = createContext<{
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}>({
  word: "" as string,
  setWord: () => null,
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

const wordReducer = (state: stateType, action) => {
  const { word, syn, isLoading } = state;
  const { type, payload } = action;
};

export const WordProvider: FC<ReactNode> = ({ children }: any) => {
  const [word, setWord] = useState(INITIAL_WORD);
  const value = { word, setWord };
  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

// TODO write with useReducer
