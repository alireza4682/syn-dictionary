import React, { createContext, useState } from "react";

export const WordContext = createContext<{
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}>({
  word: "" as string,
  setWord: () => null,
});

const INITIAL_WORD = "";

export const WordProvider = ({ children }: any) => {
  const [word, setWord] = useState(INITIAL_WORD);
  const value = { word, setWord };
  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};
