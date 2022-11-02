import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RModalImages } from '../components/RModalImages';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/RModalImages',
    component: RModalImages
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof RModalImages>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RModalImages> = (args) => <RModalImages {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    small: 'https://dummyimage.com/420x200/000/aaa',
    medium: 'https://dummyimage.com/720x400/000/aaa',
    large: 'https://dummyimage.com/1020x800/000/aaa'
};
