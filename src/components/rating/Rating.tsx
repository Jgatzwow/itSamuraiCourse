import React, { useState } from "react";
import Star from "./star/Star";
import { RatingValueType } from "../../App";

export const Rating = () => {
  const [value, setValue] = useState<RatingValueType>(0);

  return (
    <div>
      <Star callback={() => setValue(1)} selected={value > 0} />

      <Star callback={() => setValue(2)} selected={value > 1} />

      <Star callback={() => setValue(3)} selected={value > 2} />

      <Star callback={() => setValue(4)} selected={value > 3} />

      <Star callback={() => setValue(5)} selected={value > 4} />
    </div>
  );
};
