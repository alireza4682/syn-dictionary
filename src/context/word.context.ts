import { createContext, useState } from "react";

const WordContext = createContext("");


const WordProvider = ({children})=>{
  const [word,setWord] = useState('')
  return <WordContext.Provider value={word}>{children}<WordContext.Provider>
}