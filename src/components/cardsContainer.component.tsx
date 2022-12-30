import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import Card from "./card.component";

const CardContainer = () => {
  const dispatch = useAppDispatch();

  const cards = useSelector((store: RootState) => store.card.cards);

  return (
    <div>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};
export default CardContainer;
