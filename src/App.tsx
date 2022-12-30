import Card from "./components/card.component";
import { setWord, fetchSyns, synType } from "../store/slices/word.slice";
import { useSelector } from "react-redux";
import store, { useAppDispatch } from "../store/store";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { addCard } from "../store/slices/card.slice";
import CardsContainer from "./components/cardsContainer.component";

function App() {
  const word = useSelector((store: RootState) => store.word.word);
  const syn = useSelector((store: RootState) => store.word.syn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addCard(syn));
  }, [syn]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setWord(e.target.value));
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchSyns(word));
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
              id="word"
            ></input>
            <button className="text-center bg-blue-500 rounded">SEARCH</button>
          </div>
        </form>
        <CardsContainer />
      </div>
    </div>
  );
}

export default App;
