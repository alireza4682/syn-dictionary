import { synType } from "../../store/slices/word.slice";

const RelateCard = (list: synType[]) => {
  return (
    <ul>
      {Array.isArray(list) ? (
        list.map((l) => (
          <li
            className="p-2 m-2 border-t-2 flex items-center justify-between "
            key={l.word}
          >
            {l.word}
          </li>
        ))
      ) : (
        <div>nope</div>
      )}
    </ul>
  );
};

export default RelateCard;
