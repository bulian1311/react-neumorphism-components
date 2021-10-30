import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element } from './element.component';
import { Background } from '../background';

export default {
  title: 'Example/Element',
  component: Element,
  argTypes: {
    backgroundcolor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <Background {...args}>
    <Element renderAs="div" {...args} />
  </Background>
);

export const Elem = Template.bind({});
Elem.args = {};
