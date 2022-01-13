import React from 'react';
import { Story } from '@storybook/react';

import { Box as BoxComponent } from './box.component';

const Template: Story = () => <BoxComponent>I'm in a box.</BoxComponent>;

export const Box = Template.bind({});

Box.args = {};

Box.argTypes = {};
