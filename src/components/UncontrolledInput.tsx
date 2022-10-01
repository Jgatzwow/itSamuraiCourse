import React from "react";
type PropsType = {
  value: string;
};

export const UncontrolledInput: React.FC<PropsType> = (props) => {
  return <input type="text" />;
};
