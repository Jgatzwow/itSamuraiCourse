import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { MySelect } from "./MySelect";
import { ControlledCheckBox } from "../ControlledCheckBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/MySelect stories",
  component: MySelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MySelect>;

const callback = action("MySelect mode change event fired");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MySelect> = (args) => (
  <MySelect {...args} />
);

export const mySelectWithFixedValue = Template.bind({});
mySelectWithFixedValue.args = {
  mySelValue: "It-samurai",
  setMySelValue: callback,
  selectOptions: [
    { title: "Michael", value: 1 },
    { title: "Roma", value: 2 },
    {
      title: "Igor",
      value: 3,
    },
  ],
};

export const MySelChangingMode: ComponentStory<typeof MySelect> = (args) => {
  const [selValue, setSelValue] = useState("It-Samurai");
  return (
    <MySelect {...args} mySelValue={selValue} setMySelValue={setSelValue} />
  );
};
MySelChangingMode.args = {
  mySelValue: "it-samurai",
  setMySelValue: callback,
  selectOptions: [
    { title: "Michael", value: 1 },
    { title: "Roma", value: 2 },
    {
      title: "Igor",
      value: 3,
    },
  ],
};
