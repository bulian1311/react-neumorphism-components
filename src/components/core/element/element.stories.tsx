import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element } from './element.component';
import { Theme } from '../theme';

export default {
  title: 'Example/Element',
  component: Element,
  argTypes: {
    baseColor: { control: 'color' },
    blur: {control: { type: 'range', min: 0, max: 100, step: 1 }},
    distance: {control: { type: 'range', min: 5, max: 50, step: 1 }},
    colorDifference: {control: { type: 'range', min: 0, max: 0.99, step: 0.01 }},
    activeLightSource: { control: 'number' },
    shape: { control: 'number' },
    radius: { control: 'number' },
    size: { control: 'number' },
    //gradient: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => (
  <Theme {...args}>
    <Element renderAs="div">Element</Element>
  </Theme>
);

export const Elem = Template.bind({});
Elem.args = {
  blur: 60,
  distance: 20,
  colorDifference: 0.15
};
