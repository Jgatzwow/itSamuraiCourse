import React, { useState } from "react";
import AccordionTitle from "./accordionTitle/AccordionTitle";
import AccordionBody from "./accordionBody/AccordionBody";
import { ItemType } from "../../App";

export type AccordionPropsType = {
  title: string;
  items: ItemType[];
  onCLick: (val: any) => void;
};

const Accordion = (props: AccordionPropsType) => {
  const { title, items, onCLick } = props;

  const [collapsed, setCollapsed] = useState(true);

  const toggleMenu = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div>
      <AccordionTitle
        callback={() => {
          toggleMenu();
        }}
        color={"blue"}
        title={title}
      />

      {!collapsed && <AccordionBody onClick={onCLick} items={items} />}
    </div>
  );
};

export default Accordion;
