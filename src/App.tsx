import { useContext, useState } from "react";
import Card from "./components/card.component";
import { WordContext } from "./context/word.contex";

function App() {
  const { word, setWord, setSyn, isLoading, setIsLoading } =
    useContext(WordContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await setSyn(word);
    setIsLoading(false);
  };
  return (
    <div className="flex justify-center bg-zinc-100 h-screen items-center">
      <div className=" items-center text-center w-36 rounded-bg p-4 m-3">
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col rounded bg-zinc-200 justify-center">
            <label>word-search</label>
            <input
              className="rounded text-center bg-white text-black"
              type="text"
              value={word}
              onChange={onChangeHandler}
              id="word-input"
            ></input>
            <button className="text-center bg-blue-500 rounded">SEARCH</button>
          </div>
        </form>
        {isLoading ? <div className="bg-red-600">loading...</div> : <Card />}
      </div>
    </div>
  );
}

export default App;
