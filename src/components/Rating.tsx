import { useState } from "react";
import Star from "./Star";

type RatingPropsType = {
  value?: 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
  console.log("Rating render");

  const [defaultValue, setDefaultValue] = useState(!props.value ? 0 : props.value);

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

export default Rating;
