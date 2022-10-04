import React from "react";
import { RatingValueType } from "../../App";

type PropsType = {
  value: number;
  onClick: (value: RatingValueType) => void;
};

export const ControlledRating: React.FC<PropsType> = (props) => {
  const { value, onClick } = props;
  console.log("ControlledRating");
  return (
    <div>
      <Star callback={onClick} selected={value > 0} value={1} />
      <Star callback={onClick} selected={value > 1} value={2} />
      <Star callback={onClick} selected={value > 2} value={3} />
      <Star callback={onClick} selected={value > 3} value={4} />
      <Star callback={onClick} selected={value > 4} value={5} />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  value: RatingValueType;
  callback: (value: RatingValueType) => void;
};

const Star = (props: StarPropsType) => {
  const { selected, callback, value } = props;

  return (
    <span onClick={() => callback(value)}>
      {selected ? <b>star </b> : " star "}
    </span>
  );
};
