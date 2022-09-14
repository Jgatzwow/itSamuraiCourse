import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AccordionPropsType} from './Accordion'
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion stories',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item has been clicked')

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>;

export const UncontrolledAccordion = Template.bind({})
UncontrolledAccordion.args = {
    title: 'Menu',
}
