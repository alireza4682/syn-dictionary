import Card from "./components/card.component";
import { setWord } from "../store/slices/word.slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../store/store";
function App() {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = useSelector(store);
    const dispatch = useDispatch();
    dispatch(setWord(e.target.value));
  };
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
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
        <Card />
      </div>
    </div>
  );
}

export default App;
