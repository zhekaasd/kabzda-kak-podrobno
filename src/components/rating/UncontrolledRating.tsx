import { useState } from "react";
import Star from "./Star";
import { RatingType } from "../../App";

type RatingPropsType = {
}

function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating render");

  const [defaultValue, setDefaultValue] = useState(0);

  return (
    <div>
      <Star active={defaultValue > 0} setValue={setDefaultValue} value={1} />
      <Star active={defaultValue > 1} setValue={setDefaultValue} value={2} />
      <Star active={defaultValue > 2} setValue={setDefaultValue} value={3} />
      <Star active={defaultValue > 3} setValue={setDefaultValue} value={4} />
      <Star active={defaultValue > 4} setValue={setDefaultValue} value={5} />
      <button onClick={() => setDefaultValue(0)}>Clean</button>
    </div>
  );
}

export default UncontrolledRating;
