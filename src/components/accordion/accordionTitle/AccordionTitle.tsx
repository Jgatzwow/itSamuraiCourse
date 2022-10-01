import React from "react";

type PropsType = {
  title: string;
  callback: () => void;
  color: string;
};
const AccordionTitle = (props: PropsType) => {
  const { title, callback, color } = props;
  return (
    <>
      <h2 onClick={callback} style={{ color: color ? color : "black" }}>
        {title}
      </h2>
    </>
  );
};

export default AccordionTitle;
