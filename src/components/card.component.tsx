import { useSelector } from "react-redux";
import { setWord, fetchSyns } from "../../store/slices/word.slice";
import { RootState, useAppDispatch } from "../../store/store";

const Card = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.word.isLoading);
  const onClickSyn = (newWord: string) => {
    dispatch(setWord(newWord));
    dispatch(fetchSyns(newWord));
  };
  const syn = useSelector((state: RootState) => state.word.syn);
  return (
    <div>
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <ul className="rounded p-2 m-2 shadow-sm bg-slate-300">
          {syn
            .filter((s, idx) => idx < 5)
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
  );
};
export default Card;
