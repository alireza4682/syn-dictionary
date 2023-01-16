import { useState } from "react";
import { useSelector } from "react-redux";
import { oneCardType } from "../../store/slices/word.slice";
import { setWord } from "../../store/slices/word.slice";
import { RootState, useAppDispatch } from "../../store/store";
import Relate from "./relate.component";

const Card = (card: oneCardType) => {
  const { headWord, syn, isLoading } = card;
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [wordOpen, setWordOpen] = useState("");
  const showRelateBar = useSelector((store: RootState) => store.relate.isOpen);

  const onClickSyn = (newWord: string) => {
    dispatch(setWord(newWord));
    dispatch({ type: "word/fetchWord", payload: newWord });
  };

  const onClickRelBar = (newWord: string) => {
    if (!showRelateBar) {
      setWordOpen(newWord);
      dispatch({ type: "relate/openMenu", payload: newWord });
    } else {
      dispatch({ type: "relate/setIsOpen", payload: false });
    }
  };
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-col items-center justify-center font-mono">
          <div className="">
            <h2 className="">{headWord}</h2>
          </div>
          <ul className="rounded p-2 m-2 shadow-sm bg-slate-300">
            {Array.isArray(syn) ? (
              syn
                .filter((_, idx) => (!open ? idx < 5 : idx))
                .map((s) => (
                  <li
                    className="p-2 m-2 border-t-2 flex items-center justify-between "
                    key={s.word}
                  >
                    {s.word}
                    <span
                      className="  rounded-full hover:cursor-grab hover:bg-blue-400"
                      onClick={() => onClickSyn(s.word)}
                    >
                      |||
                    </span>
                    <div onClick={() => onClickRelBar(s.word)}>
                      ooo{" "}
                      {showRelateBar && wordOpen === s.word ? (
                        <Relate word={s.word} />
                      ) : null}
                    </div>
                  </li>
                ))
            ) : (
              <div></div>
            )}
          </ul>
          <button onClick={() => setOpen(!open)}>\/</button>
        </div>
      )}
    </div>
  );
};
export default Card;
