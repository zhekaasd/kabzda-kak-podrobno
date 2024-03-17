import { RatingType } from "../../App";

type StarPropsType = {
  active: boolean
  setValue: (value: RatingType) => void
  value: RatingType
}

function Star(props: StarPropsType) {
  console.log("Star render");

  return (
    <span>
      <i 
        onClick={() => props.setValue(props.value)} 
        className={`bx bxs-star ${props.active ? 'active' : ''}`} 
        style={{ fontSize: "24px" }}
      >
      </i> 
    </span>
  );
}

export default Star;