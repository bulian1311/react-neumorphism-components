import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element } from '../element';
import { Theme as ThemeComponent } from '../theme';

export default {
  title: 'Core/Theme',
  component: ThemeComponent,
  subcomponents: { Element },
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
    radius: {
      type: { name: 'number', required: false },
      name: 'Border radius',
      control: { type: 'range', min: 0, max: 50, step: 1 },
    },
    activeLightSource: {
      type: { name: 'number', required: false },
      name: 'Active light source',
      options: ['left-top', 'top-right', 'right-bottom', 'bottom-left'],
      control: { type: 'select' },
    }
  },
} as Meta;

const Template: Story = (args) => (
  <ThemeComponent {...args}>
    <Element style={{width: 300, height: 300}} renderAs="div">
      Element
    </Element>
  </ThemeComponent>
);

export const Theme = Template.bind({});

Theme.args = {
  baseColor: '#e0e0e0',
  blur: 60,
  distance: 20,
  colorDifference: 0.15,
  radius: 15,
  activeLightSource: "left-top"
};
