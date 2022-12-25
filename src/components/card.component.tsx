import { useState, useContext } from "react";
import { WordContext } from "../context/word.contex";

export type syn = {
  score: number;
  word: string;
};

const Card = () => {
  const { word, setWord } = useContext(WordContext);
  const [syn, setSyn] = useState<syn[]>([]);
  const [isloadig, setIsloading] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWord(e.target.value);

  const fetchsyns = (word: string) => {
    setIsloading(true);
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((res) => res.json())
      .then(setSyn)
      .then(() => setIsloading(false));
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    fetchsyns(word);
  };

  const onClickSyn = (newWord: string) => {
    setWord(newWord);
    fetchsyns(newWord);
  };

  return (
    <div className=" items-center text-center w-36 rounded-bg p-4 m-3">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col rounded bg-zinc-200 justify-center">
          <label>word-search</label>
          <input
            className="rounded text-center bg-white text-black"
            value={word}
            onChange={onChangeHandler}
            id="word-input"
          ></input>
          <button className="text-center bg-blue-500 rounded">SEARCH</button>
        </div>
      </form>
      {isloadig ? (
        <div className="bg-red-600">loading...</div>
      ) : (
        <ul className="rounded p-2 m-2 shadow-sm bg-slate-300">
          {syn.map((s) => (
            <li
              className="p-2 m-2 border-t-2"
              key={s.word}
              onClick={() => onClickSyn(s.word)}
            >
              {s.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Card;
