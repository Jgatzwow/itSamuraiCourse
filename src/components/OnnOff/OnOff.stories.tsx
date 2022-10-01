import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OnOff } from "./OnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Uncontrolled components/OnOff stories",
  component: OnOff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (value) => <OnOff />;

export const ChangingOnOff = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChangingOnOff.args = {
  primary: true,
  label: "OnOff",
};
