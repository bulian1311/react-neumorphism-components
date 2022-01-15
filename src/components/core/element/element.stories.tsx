import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element as ElementComponent } from './element.component';
import { Theme } from '../theme';

export default {
  title: 'Core/Element',
  component: ElementComponent,
  subcomponents: { Theme },
  argTypes: {
    active: {
      type: { name: 'boolean', required: false },
      name: 'Active',
      control: { type: 'boolean' },
    },
    size: {
      type: { name: 'number', required: false },
      name: 'Size',
      control: { type: 'range', min: 0, max: 500, step: 1 },
    },
    shape: {
      type: { name: 'string', required: false },
      name: 'Shape',
      options: ['flat', 'pressed', 'convex', 'concave'],
      control: { type: 'select' },
    },
    distance: {
      type: { name: 'number', required: false },
      name: 'Distance',
      control: { type: 'range', min: 0, max: 50, step: 1 },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Theme>
    <ElementComponent {...args} renderAs="div" style={{ width: 300 }}>
      Element
    </ElementComponent>
  </Theme>
);

export const Element = Template.bind({});

Element.args = {
  active: false,
  shape: 'flat',
  size: 300,
  distance: 30,
};
