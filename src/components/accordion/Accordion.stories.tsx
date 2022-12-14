import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Accordion from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Uncontrolled components/Accordion stories",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const UncontrolledAccordion = Template.bind({});
UncontrolledAccordion.args = {
  title: "Menu",
};
