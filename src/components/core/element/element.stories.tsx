import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element as ElementComponent } from './element.component';
import { Theme } from '../theme';

export default {
  title: 'Core/Element',
  component: ElementComponent,
  subcomponents: { Theme },
  argTypes: {
    shape: {
      type: { name: 'string', required: false },
      name: 'Shape',
      options: ['flat', 'pressed', 'convex', 'concave'],
      control: { type: 'select' },
    }
  },
} as Meta;

const Template: Story = (args) => (
  <Theme>
    <ElementComponent style={{width: 300, height: 300}} shape={args.shape} renderAs="div">
      Element
    </ElementComponent>
  </Theme>
);

export const Element = Template.bind({});

Element.args = {
  shape: 'flat'
};
