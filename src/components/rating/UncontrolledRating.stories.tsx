import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Rating } from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Uncontrolled components/UncontrolledRating stories",
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (value) => <Rating />;

export const ChangingRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChangingRating.args = {
  primary: 0,
  label: "UncontrolledRating",
};
