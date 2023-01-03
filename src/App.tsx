import { setWord, fetchSyns } from "../store/slices/word.slice";
import { useSelector } from "react-redux";
import store, { useAppDispatch } from "../store/store";
import { RootState } from "../store/store";
import CardsContainer from "./components/cardsContainer.component";
import { useEffect } from "react";

function App() {
  const word = useSelector((store: RootState) => store.word.word);
  const cardsLog = useSelector((store: RootState) => store.word.cards);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setWord(e.target.value));
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchSyns(word));
  };

  useEffect(() => {
    console.log(cardsLog);
  }, [cardsLog]);
  return (
    <div className="flex justify-center bg-zinc-100 h-screen items-center rounded-bg p-4 m-3 text-center">
      <form
        onSubmit={onSubmitHandler}
        className=" flex flex-col justify-center w-36"
      >
        <label className="">word-search</label>
        <input
          className="rounded text-center bg-white text-black "
          type="text"
          value={word}
          onChange={onChangeHandler}
          id="word"
        ></input>
        <button className="text-center bg-blue-500 rounded">SEARCH</button>
      </form>
      <CardsContainer />
    </div>
  );
}

export default App;
