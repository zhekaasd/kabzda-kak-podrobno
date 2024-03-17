import { useState } from "react";
import Star from "./Star";
import { RatingType } from "../../App";

type RatingPropsType = {
  value: RatingType
  setRating: (value: RatingType) => void
}

function Rating(props: RatingPropsType) {
  console.log("Rating render");

  const {value, setRating} = props;

  return (
    <div>
      <Star active={value > 0} setValue={setRating} value={1} />
      <Star active={value > 1} setValue={setRating} value={2} />
      <Star active={value > 2} setValue={setRating} value={3} />
      <Star active={value > 3} setValue={setRating} value={4} />
      <Star active={value > 4} setValue={setRating} value={5} />
      <button onClick={() => setRating(0)}>Clean</button>
    </div>
  );
}

export default Rating;
