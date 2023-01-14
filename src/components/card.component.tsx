import { useState } from "react";
import { oneCardType } from "../../store/slices/word.slice";
import { setWord } from "../../store/slices/word.slice";
import { useAppDispatch } from "../../store/store";
import Relate from "./relate.component";

export const endPoints = {
  rhyme: "rel_rhy",
  nRhyme: "rel_nry",
  soundsLike: "rel_hom",
  partOf: "rel_par",
  triggers: "rel_trg",
} as const;

const Card = (card: oneCardType) => {
  const { headWord, syn, isLoading } = card;
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const onClickSyn = (newWord: string) => {
    dispatch(setWord(newWord));
    dispatch({ type: "word/fetchWord", payload: newWord });
  };
  const onClickRel = (newWord: string, endpoint: typeof endPoints) => {
    console.log(newWord);
    dispatch({
      type: "relate/fetchRelated",
      payload: newWord,
    });
  };

  const onClickRelBar = (newWord: string) => {
    dispatch({ type: "relate/openMenu", payload: newWord });
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
                    <div onClick={() => onClickRelBar(s.word)}>ooo</div>
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
