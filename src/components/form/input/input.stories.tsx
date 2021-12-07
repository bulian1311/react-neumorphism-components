import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field } from '../field';

export default {
  title: 'Example/Input',
  component: Field.Input,
  subcomponents: { Field },
} as Meta;

const Template: Story = () => (
  <Field>
    <Field.Input />
  </Field>
);

export const Input = Template.bind({});
Input.args = {};
