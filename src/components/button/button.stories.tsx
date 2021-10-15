import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './button.component';
import { Background } from '../background';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundcolor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <Background {...args}>
    <Button {...args}>Default Button</Button>
  </Background>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  isLoading: false,
};
