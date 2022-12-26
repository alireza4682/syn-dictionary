import { useContext } from "react";
import { WordContext } from "../context/word.contex";
import { synType } from "../context/word.contex";

const Card = () => {
  const { syn, setSyn, setWord } = useContext(WordContext);

  const onClickSyn = (newWord: string) => {
    setWord(newWord);
    setSyn(newWord);
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
