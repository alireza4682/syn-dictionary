import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import RelateCard from "./relateCard.component";

export const endPoints = {
  rhyme: "rel_rhy",
  nRhyme: "rel_nry",
  soundsLike: "rel_hom",
  partOf: "rel_par",
  triggers: "rel_trg",
} as const;

const Relate = ({ word }: any) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const relateList = useSelector((store: RootState) => store.relate.relates);

  const onClickRelate = (endpoint: string) => {
    setOpen(true);
    dispatch({ type: "relate/fetchRelated", payload: { word, endpoint } });
  };

  return (
    <div>
      {Object.values(endPoints).map((k) => (
        <div key={k}>
          <div onClick={() => onClickRelate(k)}>O</div>
          {open ? <RelateCard {...relateList} /> : null}
        </div>
      ))}
    </div>
  );
};

export default Relate;
