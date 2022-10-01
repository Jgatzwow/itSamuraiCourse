import React from "react";
import AccordionTitle from "../accordion/accordionTitle/AccordionTitle";
import AccordionBody from "../accordion/accordionBody/AccordionBody";

type ControlledAccordionPropsType = {
  title: string;
  collapsed: boolean;
  toggleMenu: (collapsed: boolean) => void;
  color: string;
};

const ControlledAccordion = (props: ControlledAccordionPropsType) => {
  const { title, collapsed, toggleMenu, color } = props;

  return (
    <div>
      <AccordionTitle
        callback={() => {
          toggleMenu(collapsed);
        }}
        title={title}
        color={color}
      />
      {!collapsed && <AccordionBody />}
    </div>
  );
};

export default ControlledAccordion;
