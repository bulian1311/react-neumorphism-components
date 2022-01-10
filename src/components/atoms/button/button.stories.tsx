import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button as ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      name: 'Size',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      name: 'Disabled',
      control: { type: 'boolean' },
    },
    isLoading: {
      type: { name: 'boolean', required: false },
      name: 'Is loading',
      control: { type: 'boolean' },
    },
    isFullWidth: {
      type: { name: 'boolean', required: false },
      name: 'Is full width',
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <ButtonComponent {...args}>Default Button</ButtonComponent>
);

export const Button = Template.bind({});
Button.args = {
  size: 'medium',
  disabled: false,
  isLoading: false,
  isFullWidth: false,
};
