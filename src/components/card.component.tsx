import { useSelector } from "react-redux";
import { oneCardType } from "../../store/slices/card.slice";
import { setWord, fetchSyns } from "../../store/slices/word.slice";
import { RootState, useAppDispatch } from "../../store/store";

const Card = (card: oneCardType) => {
  const { syn } = card;
  const dispatch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.word.isLoading);
  const onClickSyn = (newWord: string) => {
    dispatch(setWord(newWord));
    dispatch(fetchSyns(newWord));
  };

  return (
    <div>
      <div>{useSelector((store: RootState) => store.word.word)}</div>
      {
        <ul className="rounded p-2 m-2 shadow-sm bg-slate-300">
          {Array.isArray(syn) ? (
            syn
              .filter((item, idx) => idx < 5)
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
      }
    </div>
  );
};
export default Card;
