import { useState } from "react";
import Card from "./components/card.component";

function App() {
  const [word, setWord] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWord(e.target.value);
  return (
    <div className="flex justify-center bg-zinc-100 h-screen items-center">
      <input onChange={onChangeHandler}></input>
      <Card />
    </div>
  );
}

export default App;
