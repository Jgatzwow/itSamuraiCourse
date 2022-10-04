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
      <MemoedMySelect
        mySelValue={mySelValue}
        setMySelValue={setMySelValue}
        selectOptions={initialAccordionState}
      />
      <MemoedControlledSelect
        selectVal={selectValue}
        setSelectValue={setSelectValue}
      />
      <MemoedControlledInput value={inputValue} setInputValue={setInputValue} />
      <MemoedControlledCheckBox checked={checked} callback={setChecked} />
      <MemoedPageTitle title={"This is APP component"} />
      <MemoedPageTitle title={"My Friends"} />
      <MemoedOnOFF />
      <MemoedControlledOnOff on={on} setOn={setOn} />
      <MemoedAccordion
        onCLick={onAccordionItemClick}
        items={initialAccordionState}
        title={"Accordion Title"}
      />
      <MemoedControlledAccordion
        onClick={onAccordionItemClick}
        items={initialAccordionState}
        color={"blue"}
        collapsed={collapsed}
        toggleMenu={toggleMenu}
        title={"ControlledAccordion Title"}
      />
      <MemoedControlledRating value={ratingValue} onClick={setRatingValue} />
      <MemoedRating />
    </div>
  );
};

export default App;

const PageTitle = (props: any) => {
  return <h1>{props.title}</h1>;
};
const MemoedPageTitle = React.memo(PageTitle);
const MemoedOnOFF = React.memo(OnOff);
const MemoedControlledOnOff = React.memo(ControlledOnOff);
const MemoedRating = React.memo(Rating);
const MemoedControlledRating = React.memo(ControlledRating);
const MemoedAccordion = React.memo(Accordion, () => true);
const MemoedControlledAccordion = React.memo(ControlledAccordion);
const MemoedMySelect = React.memo(MySelect, () => true);
const MemoedControlledSelect = React.memo(ControlledSelect);
const MemoedControlledInput = React.memo(ControlledInput);
const MemoedControlledCheckBox = React.memo(ControlledCheckBox);
