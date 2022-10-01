import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { ControlledOnOff } from "./ControlledOnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/Controlled OnOff stories",
  component: ControlledOnOff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledOnOff>;

const callback = action("OnOff mode change event fired");
const onClickCallback = action("some item has been clicked");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledOnOff> = (args) => (
  <ControlledOnOff {...args} />
);

export const onMode = Template.bind({});
onMode.args = {
  on: true,
  setOn: callback,
};

export const offMode = Template.bind({});
offMode.args = {
  on: false,
  setOn: callback,
};

export const ChangingOnOffMode: ComponentStory<typeof ControlledOnOff> = (
  args
) => {
  const [on, setOn] = useState<boolean>(false);
  return <ControlledOnOff {...args} on={on} setOn={() => setOn(!on)} />;
};
ChangingOnOffMode.args = {
  on: false,
};
