import React from "react";
import { ItemType } from "../../../App";

type PropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

const AccordionBody = (props: PropsType) => {
  const { items, onClick } = props;
  return (
    <ul>
      {items.map((i, idx) => {
        return (
          <li
            key={idx}
            onClick={() => {
              onClick(i.value);
            }}
          >
            {i.title}
          </li>
        );
      })}
    </ul>
  );
};

export default AccordionBody;
