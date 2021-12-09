import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element } from './element.component';
import { Theme } from '../theme';

export default {
  title: 'Example/Element',
  component: Element,
  argTypes: {
    backgroundcolor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <Theme {...args}>
    <Element renderAs="div" {...args}>
      Element
    </Element>
  </Theme>
);

export const Elem = Template.bind({});
Elem.args = {};
