import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { ControlledSelect } from "./ControlledSelect";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/ControlledSelect stories",
  component: ControlledSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledSelect>;

const callback = action("ControlledSelect mode change event fired");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledSelect> = (args) => (
  <ControlledSelect {...args} />
);

export const ControlledSelectWithFixedValue1 = Template.bind({});
ControlledSelectWithFixedValue1.args = {
  selectVal: "1",
  setSelectValue: callback,
};
export const ControlledSelectWithFixedValue2 = Template.bind({});
ControlledSelectWithFixedValue2.args = {
  selectVal: "2",
  setSelectValue: callback,
};
export const ControlledSelectWithFixedValue3 = Template.bind({});
ControlledSelectWithFixedValue3.args = {
  selectVal: "3",
  setSelectValue: callback,
};

export const ControlledSelectChangingMode: ComponentStory<
  typeof ControlledSelect
> = (args) => {
  const [selValue, setSelValue] = useState<string | undefined>("1");
  return (
    <ControlledSelect
      {...args}
      selectVal={selValue}
      setSelectValue={setSelValue}
    />
  );
};
ControlledSelectChangingMode.args = {
  selectVal: "2",
  setSelectValue: callback,
};
