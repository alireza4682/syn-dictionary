import { oneCardType } from "../../store/slices/word.slice";
import { setWord } from "../../store/slices/word.slice";
import { useAppDispatch } from "../../store/store";
const Card = (card: oneCardType) => {
  const { headWord, syn, isLoading } = card;
  const dispatch = useAppDispatch();
  const onClickSyn = (newWord: string) => {
    dispatch(setWord(newWord));
    dispatch({ type: "word/fetchWord", payload: newWord });
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
                .filter((_, idx) => idx < 5)
                .map((s) => (
                  <li
                    className="p-2 m-2 border-t-2 rounded-md hover:cursor-grab hover:bg-blue-400 "
                    key={s.word}
                    onClick={() => onClickSyn(s.word)}
                  >
                    {s.word}
                  </li>
                ))
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Card;
