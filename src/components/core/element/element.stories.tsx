import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element } from './element.component';
import { Theme } from '../theme';

export default {
  title: 'Example/Element',
  component: Element,
  subcomponents: { Theme },
  argTypes: {
    baseColor: {
      type: { name: 'string', required: false },
      name: 'Base color',
      description: 'overwritten description',
      control: 'color',
    },
    blur: {
      type: { name: 'number', required: false },
      name: 'Blur',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    distance: {
      type: { name: 'number', required: false },
      name: 'Distance',
      control: { type: 'range', min: 5, max: 50, step: 1 },
    },
    colorDifference: {
      type: { name: 'number', required: false },
      name: 'Color difference',
      control: { type: 'range', min: 0, max: 0.99, step: 0.01 },
    },
    activeLightSource: {
      type: { name: 'number', required: false },
      name: 'Active light source',
      options: [1, 2, 3, 4],
      control: { type: 'select' },
    },
    shape: { control: 'number' },
    radius: { control: 'number' },
    size: { control: 'number' },
  },
} as Meta;

const Template: Story = (args) => (
  <Theme {...args}>
    <Element renderAs="div">Element</Element>
  </Theme>
);

export const Elem = Template.bind({});

Elem.args = {
  baseColor: '#e0e0e0',
  blur: 60,
  distance: 20,
  colorDifference: 0.15,
  activeLightSource: 1,
};
