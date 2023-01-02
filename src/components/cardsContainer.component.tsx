import { useSelector } from "react-redux";
import { oneCardType } from "../../store/slices/word.slice";
import { RootState } from "../../store/store";
import Card from "./card.component";

const CardsContainer = () => {
  const cards = useSelector((store: RootState) => store.word.cards);

  return (
    <div>
      <div className="flex flext-row">
        {cards.map((card: oneCardType) => (
          <Card {...card} key={card.headWord} />
        ))}
      </div>
    </div>
  );
};
export default CardsContainer;
