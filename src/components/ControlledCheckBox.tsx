import React, { ChangeEvent } from "react";

type PropsType = {
  checked: boolean;
  callback: (flag: boolean) => void;
};

export const ControlledCheckBox: React.FC<PropsType> = ({
  checked,
  callback,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    callback(e.currentTarget.checked);
  };
  return <input onChange={onChange} checked={checked} type="checkbox" />;
};
