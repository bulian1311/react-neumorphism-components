import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box as BoxComponent } from './box.component';

export default {
  title: 'Atoms/Box',
  component: BoxComponent,
  argTypes: {},
} as Meta;

const Template: Story = () => <BoxComponent>I'm in a box.</BoxComponent>;

export const Box = Template.bind({});
Box.args = {};
