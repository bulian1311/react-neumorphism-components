import React from 'react';
import { Story } from '@storybook/react';

import { Button } from '../button';

const Template: Story = () => (
  <Button.Group>
    <Button style={{ marginRight: 20 }}>Button 1</Button>
    <Button style={{ marginRight: 20 }}>Button 2</Button>
    <Button>Button 3</Button>
  </Button.Group>
);

export const ButtonGroup = Template.bind({});

ButtonGroup.args = {};

ButtonGroup.argTypes = {};
