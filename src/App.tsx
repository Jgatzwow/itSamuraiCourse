import React, { useState } from "react";
import "./App.css";
import { Rating } from "./components/rating/Rating";
import Accordion from "./components/accordion/Accordion";
import { OnOff } from "./components/OnnOff/OnOff";
import ControlledAccordion from "./components/controlledAccordion/ControlledAccordion";
import { ControlledRating } from "./components/controlledRating/ControlledRating";
import { ControlledOnOff } from "./components/OnnOff/ControlledOnOff";
import { ControlledInput } from "./components/ControlledInput";
import { ControlledCheckBox } from "./components/ControlledCheckBox";
import { ControlledSelect } from "./components/ControlledSelect";
import { MySelect } from "./components/mySelect/MySelect";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type ItemType = {
  title: string;
  value: any;
};

const App = () => {
  const initialAccordionState: ItemType[] = [
    { title: "Michael", value: 1 },
    { title: "Roma", value: 2 },
    {
      title: "Igor",
      value: 3,
    },
  ];
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleMenu = () => {
    setCollapsed((prevState) => !prevState);
  };
  const [inputValue, setInputValue] = useState("It-samurai");
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [on, setOn] = useState(true);
  const [checked, setChecked] = useState(false);
  const [selectValue, setSelectValue] = useState<string | undefined>("1");
  const onAccordionItemClick = (itemVal: any) => {
    console.log(itemVal);
  };
  const [mySelValue, setMySelValue] = useState("It-Samurai");
  return (
    <div className="App">
      <MySelect
        mySelValue={mySelValue}
        setMySelValue={setMySelValue}
        selectOptions={initialAccordionState}
      />
      <ControlledSelect
        selectVal={selectValue}
        setSelectValue={setSelectValue}
      />
      <ControlledInput value={inputValue} setInputValue={setInputValue} />
      <ControlledCheckBox checked={checked} callback={setChecked} />
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My Friends"} />
      <OnOff />
      <ControlledOnOff on={on} setOn={setOn} />
      <Accordion
        onCLick={onAccordionItemClick}
        items={initialAccordionState}
        title={"Accordion Title"}
      />
      <ControlledAccordion
        onClick={onAccordionItemClick}
        items={initialAccordionState}
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
