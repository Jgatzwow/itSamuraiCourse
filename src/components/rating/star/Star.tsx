import React from "react";

type StarPropsType = {
  selected: boolean;
  callback: () => void;
};

const Star = (props: StarPropsType) => {
  const { selected, callback } = props;

  return <span onClick={callback}>{selected ? <b>star </b> : " star "}</span>;
};

export default Star;
