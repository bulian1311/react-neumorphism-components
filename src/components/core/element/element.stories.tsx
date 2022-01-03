import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element as ElementComponent } from './element.component';
import { Theme } from '../theme';

export default {
  title: 'Core/Element',
  component: ElementComponent,
  subcomponents: { Theme },
  argTypes: {
    height: {
      type: { name: 'number', required: false },
      name: 'Height',
      control: { type: 'range', min: 0, max: 500, step: 1 },
    },
    width: {
      type: { name: 'number', required: false },
      name: 'Width',
      control: { type: 'range', min: 0, max: 500, step: 1 },
    },
    shape: {
      type: { name: 'string', required: false },
      name: 'Shape',
      options: ['flat', 'pressed', 'convex', 'concave'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Theme>
    <ElementComponent
      //style={{ width: 300, height: 300 }}
      {...args}
      renderAs="div"
    >
      Element
    </ElementComponent>
  </Theme>
);

export const Element = Template.bind({});

Element.args = {
  shape: 'flat',
  height: 300,
  width: 300,
};
