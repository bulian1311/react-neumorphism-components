import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Background as BackgroundComponent } from './background.component';

export default {
  title: 'Core/Background',
  component: BackgroundComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <BackgroundComponent {...args}>Background</BackgroundComponent>
);

export const Background = Template.bind({});
Background.args = {};
