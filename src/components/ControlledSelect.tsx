import React, { ChangeEvent } from "react";

type PropsType = {
  selectVal: string | undefined;
  setSelectValue: (selVal: string | undefined) => void;
};

export const ControlledSelect: React.FC<PropsType> = ({
  setSelectValue,
  selectVal,
}) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
  };
  return (
    <select value={selectVal} onChange={onChange} name={"choose your city"}>
      <option>none</option>
      <option value="1">Kiev</option>
      <option value="2">New-York</option>
      <option value="3">San Francisco</option>
    </select>
  );
};
