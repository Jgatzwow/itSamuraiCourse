import React from "react";

type PropsType = {
  on: boolean;
  setOn: (flag: boolean) => void;
};

export const ControlledOnOff = (props: PropsType) => {
  const { on, setOn } = props;

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "green" : "white",
    cursor: "pointer",

    "div:hover": {
      backgroundColor: "orange",
    },
  };

  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: !on ? "red" : "white",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  };

  return (
    <div>
      <div onClick={() => setOn(true)} style={onStyle}>
        Onn
      </div>
      <div onClick={() => setOn(false)} style={offStyle}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
