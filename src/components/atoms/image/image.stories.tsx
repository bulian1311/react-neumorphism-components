import React from 'react';
import { Story } from '@storybook/react';

import { Image as ImageComponent } from './image.component';

const Template: Story = (args) => <ImageComponent {...args} src="" />;

export const Image = Template.bind({});

Image.args = {
  isRoundes: false,
  isFullWidth: false,
  size: 100
};

Image.argTypes = {
  isRoundes: {
    type: { name: 'boolean', required: false },
    name: 'Is Roundes',
    control: { type: 'boolean' },
  },
  isFullWidth: {
    type: { name: 'boolean', required: false },
    name: 'Is Roundes',
    control: { type: 'boolean' },
  },
  size: {
    type: { name: 'number', required: false },
    name: 'Size',
    control: { type: 'range', min: 0, max: 500, step: 1 },
  },
};
