import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import Star from "./Star";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/Star stories",
  component: Star,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Star>;

const callback = action("OnOff mode change event fired");
const onClickCallback = action("some item has been clicked");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const SelectedMode = Template.bind({});
SelectedMode.args = {
  selected: true,
  callback: callback,
};

export const notSelectedMode = Template.bind({});
notSelectedMode.args = {
  selected: false,
  callback: callback,
};
