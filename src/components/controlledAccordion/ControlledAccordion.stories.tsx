import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import ControlledAccordion from "./ControlledAccordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/ControlledAccordion stories",
  component: ControlledAccordion,
  argTypes: {
    color: {
      control: "color",
    },
    onChange: {
      table: {
        category: "events",
      },
    },
    onCLickCallback: {
      table: {
        category: "events",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledAccordion>;

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item has been clicked");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledAccordion> = (args) => (
  <ControlledAccordion {...args} />
);

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
  title: "Users",
  collapsed: true,
  items: [
    { title: "Michael", value: 1 },
    { title: "Roma", value: 2 },
    {
      title: "Igor",
      value: 3,
    },
  ],
  toggleMenu: callback,
  onClick: onClickCallback,
};

export const MenuNotCollapsedMode = Template.bind({});
MenuNotCollapsedMode.args = {
  title: "Users",
  items: [
    { title: "Michael", value: 1 },
    { title: "Roma", value: 2 },
    {
      title: "Igor",
      value: 3,
    },
  ],
  collapsed: false,
  toggleMenu: callback,
  onClick: onClickCallback,
};

export const ChangingMode: ComponentStory<typeof ControlledAccordion> = (
  args
) => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <ControlledAccordion
      {...args}
      collapsed={value}
      toggleMenu={() => setValue(!value)}
    />
  );
};
ChangingMode.args = {
  title: "Users",
  items: [
    { title: "Michael", value: 1 },
    { title: "Roma", value: 2 },
    {
      title: "Igor",
      value: 3,
    },
  ],
  toggleMenu: callback,
  onClick: onClickCallback,
};
