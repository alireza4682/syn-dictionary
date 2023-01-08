import { useSelector } from "react-redux";
import { oneCardType, removeCard } from "../../store/slices/word.slice";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import Card from "./card.component";

const CardsContainer = () => {
  const cards = useSelector((store: RootState) => store.word.cards);
  const dispatch = useAppDispatch();

  const onClickClose = (word: string) => {
    dispatch(removeCard(word));
  };

  return (
    <div className="flex flext-row">
      {cards.map((card: oneCardType) => (
        <div key={card.headWord}>
          <div
            onClick={() => onClickClose(card.headWord)}
            className="hover:bg-red-500"
          >
            x
          </div>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};
export default CardsContainer;
