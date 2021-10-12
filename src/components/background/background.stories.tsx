import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Background } from './background.component';

export default {
  title: 'Example/Background',
  component: Background,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Background>;

const Template: Story<typeof Background> = (args) => (
  <Background {...args}>Background</Background>
);

export const Back = Template.bind({});
Back.args = {};
