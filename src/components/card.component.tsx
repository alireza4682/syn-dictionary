import { useState, useContext } from "react";
import { WordContext } from "../context/word.contex";
import { synType } from "../context/word.contex";

const Card = (syn: synType[]) => {
  const { word, setWord } = useContext(WordContext);

  const onClickSyn = (newWord: string) => {
    setWord(newWord);
    fetchsyns(newWord); //TODO add this to contex so we can access it from here!
  };

  return (
    <div>
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
    </div>
  );
};
export default Card;
