import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type synType = {
  word: string;
  score: number;
};

const fetchSyns = createAsyncThunk("syn/fetchSyns", async (word: string) => {
  const response = await fetch(
    `https://api.datamuse.com/words?rel_syn=${word}`
  );
  return response.json();
});

const wordSlice = createSlice({
  name: "word",
  initialState: { word: "", syn: [] as synType[] },
  reducers: {
    setWord: (state, action) => {
      return (state.word = action.payload);
    },
    setSyn: (state, action) => {
      const syn = fetchSyns(action.payload);
      return (state.syn = syn);
    },
  },
});
