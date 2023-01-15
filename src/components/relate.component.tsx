import { useAppDispatch } from "../../store/store";

export const endPoints = {
  rhyme: "rel_rhy",
  nRhyme: "rel_nry",
  soundsLike: "rel_hom",
  partOf: "rel_par",
  triggers: "rel_trg",
} as const;

const Relate = ({ word }: any) => {
  const dispatch = useAppDispatch();

  const onClickRelate = (endpoint: string) => {
    dispatch({ type: "relate/fetchRelated", payload: { word, endpoint } });
  };

  return (
    <div>
      <div onClick={() => onClickRelate(endPoints.rhyme)}>1</div>
      <div onClick={() => onClickRelate(endPoints.nRhyme)}>2</div>
      <div onClick={() => onClickRelate(endPoints.soundsLike)}>3</div>
      <div onClick={() => onClickRelate(endPoints.partOf)}>4</div>
      <div onClick={() => onClickRelate(endPoints.triggers)}>5</div>
    </div>
  );
};

export default Relate;
