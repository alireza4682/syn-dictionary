import { useSelector } from "react-redux";
import { oneCardType } from "../../store/slices/card.slice";
import { RootState, useAppDispatch } from "../../store/store";
import Card from "./card.component";

const CardsContainer = () => {
  const dispatch = useAppDispatch();

  const cards = useSelector((store: RootState) => store.card.cards);

  return (
    <div>
      {cards.map((card: oneCardType) => (
        <Card {...card} key={card.id} />
      ))}
    </div>
  );
};
export default CardsContainer;
