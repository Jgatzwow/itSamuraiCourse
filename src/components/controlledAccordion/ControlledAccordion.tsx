import React from "react";
import AccordionTitle from "../accordion/accordionTitle/AccordionTitle";
import AccordionBody from "../accordion/accordionBody/AccordionBody";
import { ItemType } from "../../App";

type ControlledAccordionPropsType = {
  title: string;
  collapsed: boolean;
  toggleMenu: (collapsed: boolean) => void;
  color: string;
  items: ItemType[];
  onClick: (value: any) => void;
};

const ControlledAccordion = (props: ControlledAccordionPropsType) => {
  const { title, collapsed, toggleMenu, color, items, onClick } = props;

  return (
    <div>
      <AccordionTitle
        callback={() => {
          toggleMenu(collapsed);
        }}
        title={title}
        color={color}
      />
      {!collapsed && <AccordionBody onClick={onClick} items={items} />}
    </div>
  );
};

export default ControlledAccordion;
