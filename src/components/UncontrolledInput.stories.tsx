import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UncontrolledInput } from "./UncontrolledInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Uncontrolled components/input stories",
  component: UncontrolledInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof UncontrolledInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledInput> = (args) => (
  <UncontrolledInput {...args} />
);

export const notControlledInput = Template.bind({});
notControlledInput.args = {};
