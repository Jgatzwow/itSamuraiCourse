import React from "react";

type PropsType = {
  value: string;
  setInputValue: (newValue: string) => void;
};

export const ControlledInput: React.FC<PropsType> = ({
  value,
  setInputValue,
}) => {
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  return <input value={value} onChange={onInputChangeHandler} type="text" />;
};
