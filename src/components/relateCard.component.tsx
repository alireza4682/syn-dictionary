import { synType } from "../../store/slices/word.slice";

const RelateCard = (list: synType[]) => {
  return (
    <div>
      {Array.isArray(list) ? (
        list
          .filter((_, idx) => idx < 3)
          .map((l) => (
            <li
              className="p-2 m-2 border-t-2 flex items-center justify-between "
              key={l.word}
            >
              {l.word}
            </li>
          ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RelateCard;
