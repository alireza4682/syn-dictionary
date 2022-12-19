import React, { useState } from "react";
type syn = {
  score: number;
  word: string;
};
function App() {
  const [state, setstate] = useState("");
  const [syn, setsyn] = useState<syn[]>([]);
  const [isloadig, setisloading] = useState(false);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setstate(e.target.value);
  const fetchsyns = (word: string) => {
    setisloading(true);
    fetch(`https://api.datamuse.com/words?rel_syn=${state}`)
      .then((res) => res.json())
      .then(setsyn)
      .then(() => setisloading(false));
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    fetchsyns(state);
  };
  const onClickSyn = (newWord: string) => {
    setstate(newWord);
    fetchsyns(newWord);
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <label>word-search</label>
        <input value={state} onChange={onChangeHandler} id="word-input"></input>
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
}

export default App;
