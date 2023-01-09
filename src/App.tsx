import { setWord } from "../store/slices/word.slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { RootState } from "../store/store";
import CardsContainer from "./components/cardsContainer.component";

function App() {
  const word = useSelector((store: RootState) => store.word.word);

  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setWord(e.target.value));
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "word/fetchWord", payload: word });
  };

  return (
    <div className="flex justify-center items-center bg-rose-100 h-screen   min-h-screen">
      <form
        onSubmit={onSubmitHandler}
        className=" flex flex-col justify-center w-36"
      >
        <label className="font-bold text-center">word-search</label>
        <input
          className="rounded  bg-white text-black font-semibold text-center"
          type="text"
          value={word}
          onChange={onChangeHandler}
          id="word"
        ></input>
        <button className="text-center bg-blue-500 rounded font-medium">
          SEARCH
        </button>
      </form>
      <CardsContainer />
    </div>
  );
}

export default App;
