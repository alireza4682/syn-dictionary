import { useState } from "react";

type syn = {
  score: number;
  word: string;
};

const Card = () => {
  const [word, setWord] = useState("");
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
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>word-search</label>
        <input value={word} onChange={onChangeHandler} id="word-input"></input>
        <button>SEARCH</button>
      </form>
      {isloadig ? (
        <div>loading...</div>
      ) : (
        <ul>
          {syn.map((s) => (
            <li key={s.word} onClick={() => onClickSyn(s.word)}>
              {s.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Card;
