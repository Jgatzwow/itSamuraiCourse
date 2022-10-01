import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { ControlledInput } from "./ControlledInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/ControlledInput stories",
  component: ControlledInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledInput>;

const callback = action("ControlledInput mode change event fired");
const onClickCallback = action("some item has been clicked");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledInput> = (args) => (
  <ControlledInput {...args} />
);

export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
  value: "It-samurai",
  setInputValue: callback,
};

export const ControlledInputChangingMode: ComponentStory<
  typeof ControlledInput
> = (args) => {
  const [inputValue, setInputValue] = useState("It-Samurai");
  return (
    <ControlledInput
      {...args}
      value={inputValue}
      setInputValue={setInputValue}
    />
  );
};
ControlledInputChangingMode.args = {
  value: "It-Samurai",
  setInputValue: callback,
};
