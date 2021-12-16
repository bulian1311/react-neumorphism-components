import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button as ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundcolor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
    <ButtonComponent {...args}>Default Button</ButtonComponent>
);

export const Button = Template.bind({});
Button.args = {
  disabled: false,
  isLoading: false,
};
