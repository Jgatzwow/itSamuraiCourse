import React, { useState } from "react";
import "./App.css";
import { Rating } from "./components/rating/Rating";
import Accordion from "./components/accordion/Accordion";
import { OnOff } from "./components/OnnOff/OnOff";
import ControlledAccordion from "./components/controlledAccordion/ControlledAccordion";
import { ControlledRating } from "./components/controlledRating/ControlledRating";
import { ControlledOnOff } from "./components/OnnOff/ControlledOnOff";
import { ControlledInput } from "./components/ControlledInput";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleMenu = () => {
    setCollapsed((prevState) => !prevState);
  };
  const [inputValue, setInputValue] = useState("It-samurai");
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [on, setOn] = useState(true);
  return (
    <div className="App">
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My Friends"} />
      <ControlledInput value={inputValue} setInputValue={setInputValue} />
      <OnOff />
      <ControlledOnOff on={on} setOn={setOn} />
      <Accordion title={"Accordion Title"} />
      <ControlledAccordion
        color={"blue"}
        collapsed={collapsed}
        toggleMenu={toggleMenu}
        title={"ControlledAccordion Title"}
      />
      <ControlledRating value={ratingValue} onClick={setRatingValue} />
      <Rating />
    </div>
  );
};

export default App;

const PageTitle = (props: any) => {
  return <h1>{props.title}</h1>;
};
