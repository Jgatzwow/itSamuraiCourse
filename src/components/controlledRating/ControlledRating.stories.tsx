import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { ControlledRating } from "./ControlledRating";
import { RatingValueType } from "../../App";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "controlled components/ControlledRating stories",
  component: ControlledRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledRating>;

const callback = action("ControlledRating mode change event fired");
const onClickCallback = action("some item has been clicked");

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledRating> = (args) => (
  <ControlledRating {...args} />
);

export const oneStarSelected = Template.bind({});
oneStarSelected.args = {
  value: 1,
  onClick: callback,
};

export const twoStarsSelected = Template.bind({});
twoStarsSelected.args = {
  value: 2,
  onClick: callback,
};
export const threeStarsSelected = Template.bind({});
threeStarsSelected.args = {
  value: 3,
  onClick: callback,
};
export const fourStarsSelected = Template.bind({});
fourStarsSelected.args = {
  value: 4,
  onClick: callback,
};

export const fiveStarsSelected = Template.bind({});
fiveStarsSelected.args = {
  value: 5,
  onClick: callback,
};

export const ControlledRatingChangingMode: ComponentStory<
  typeof ControlledRating
> = (args) => {
  const [value, setValue] = useState<RatingValueType>(0);
  return <ControlledRating {...args} value={value} onClick={setValue} />;
};
ControlledRatingChangingMode.args = {
  value: 4,
};
