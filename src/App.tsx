import { useState } from "react";
import Card from "./components/card.component";

function App() {
  const [word, setWord] = useState("");
  const fetchsyns = (word: string) => {
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`).then((res) =>
      res.json()
    );
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    fetchsyns(word);
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWord(e.target.value);
  return (
    <div className="flex justify-center bg-zinc-100 h-screen items-center">
      <form onSubmit={onSubmitHandler}>
        <input onChange={onChangeHandler}>Search-Word</input>
      </form>
      <Card />
    </div>
  );
}

export default App;
