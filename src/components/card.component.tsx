import { useSelector } from "react-redux";
import { oneCardType } from "../../store/slices/card.slice";
import { setWord, fetchSyns, synType } from "../../store/slices/word.slice";
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
      <div className="">x</div>
      <div>
        {isLoading ? (
          <div>LOADING...</div>
        ) : (
          <ul className="rounded p-2 m-2 shadow-sm bg-slate-300">
            {syn
              .filter((item, idx) => idx < 5)
              .map((s) => (
                <li
                  className="p-2 m-2 border-t-2"
                  key={s.word}
                  onClick={() => onClickSyn(s.word)}
                >
                  {s.word}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Card;
