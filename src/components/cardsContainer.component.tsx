import { useSelector } from "react-redux";
import { oneCardType, removeCard } from "../../store/slices/word.slice";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import Card from "./card.component";

const CardsContainer = () => {
  const cards = useSelector((store: RootState) => store.word.cards);
  const dispatch = useAppDispatch();

  const onClickClose = (idx: number) => {
    dispatch(removeCard(idx));
  };

  return (
    <div className="flex flext-row">
      {cards.map((card: oneCardType, idx) => (
        <div key={idx}>
          <div onClick={() => onClickClose(idx)} className="hover:bg-red-500">
            x
          </div>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};
export default CardsContainer;
