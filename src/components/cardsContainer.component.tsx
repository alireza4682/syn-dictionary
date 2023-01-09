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
    <div className="flex flex-col md:flex-row rounded-lg bg-rose-300 shadow-sm ">
      {cards.map((card: oneCardType, idx) => (
        <div key={idx}>
          <div
            onClick={() => onClickClose(idx)}
            className="items-center justify-center hover:bg-red-500"
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
