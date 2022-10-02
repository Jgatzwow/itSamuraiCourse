import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { ControlledCheckBox } from "./ControlledCheckBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/ControlledCheckBox stories",
  component: ControlledCheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledCheckBox>;

const callback = action("ControlledCheckBox mode change event fired");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledCheckBox> = (args) => (
  <ControlledCheckBox {...args} />
);

export const ControlledCheckBoxTicked = Template.bind({});
ControlledCheckBoxTicked.args = {
  checked: true,
  callback: callback,
};
export const ControlledCheckBoxNotTicked = Template.bind({});
ControlledCheckBoxNotTicked.args = {
  checked: false,
  callback: callback,
};

export const ControlledCheckBoxChangingMode: ComponentStory<
  typeof ControlledCheckBox
> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <ControlledCheckBox {...args} checked={checked} callback={setChecked} />
  );
};
ControlledCheckBoxChangingMode.args = {
  checked: false,
  callback: callback,
};
