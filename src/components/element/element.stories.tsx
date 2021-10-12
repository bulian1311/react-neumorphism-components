import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Element } from './element.component';

export default {
  title: 'Example/Element',
  component: Element,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <Element {...args}>Element</Element>
);

export const Elem = Template.bind({});
Elem.args = {
  renderAs: 'div'
};