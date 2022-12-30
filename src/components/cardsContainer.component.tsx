import { useSelector } from "react-redux";
import { oneCardType } from "../../store/slices/card.slice";
import { RootState, useAppDispatch } from "../../store/store";
import Card from "./card.component";

const CardsContainer = () => {
  const cards = useSelector((store: RootState) => store.card.cards);

  return (
    <div className="flex flext-row">
      {cards.map((card: oneCardType) => (
        <Card syn={card.syn} id={card.id} key={card.id} />
      ))}
    </div>
  );
};
export default CardsContainer;
