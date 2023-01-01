import { oneCardType } from "../../store/slices/word.slice";
import { setWord, fetchSyns } from "../../store/slices/word.slice";
import { useAppDispatch } from "../../store/store";

const Card = (card: oneCardType) => {
  const { headWord, syn, isLoading } = card;
  const dispatch = useAppDispatch();
  const onClickSyn = (newWord: string) => {
    dispatch(setWord(newWord));
    dispatch(fetchSyns(newWord));
  };

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-row">
          <h2>{headWord}</h2>
          <ul className="rounded p-2 m-2 shadow-sm bg-slate-300">
            {Array.isArray(syn) ? (
              syn
                .filter((_, idx) => idx < 5)
                .map((s) => (
                  <li
                    className="p-2 m-2 border-t-2"
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
