import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import ControlledAccordion from './ControlledAccordion';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ControlledAccordion stories',
    component: ControlledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ControlledAccordion>;

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item has been clicked')

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledAccordion> = (args) => <ControlledAccordion {...args}/>;

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    toggleMenu: callback,
}

export const MenuNotCollapsedMode = Template.bind({})
MenuNotCollapsedMode.args = {
    title: 'Menu',
    collapsed: false,
    toggleMenu: callback,
}

export const ChangingMode: ComponentStory<typeof ControlledAccordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <ControlledAccordion {...args} collapsed={value} toggleMenu={()=> setValue(!value)}/>)

}
ChangingMode.args = {
    title:'Menu'
}