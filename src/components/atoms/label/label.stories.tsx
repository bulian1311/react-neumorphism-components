import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field } from '../field';

export default {
  title: 'Atoms/Label',
  component: Field.Label,
  subcomponents: { Field, Input: Field.Input },
} as Meta;

const Template: Story = ({ placeholder }) => (
  <Field>
    <Field.Input placeholder={placeholder} />
    <Field.Label>Test Label</Field.Label>
  </Field>
);

export const Label = Template.bind({});
Label.args = {
  placeholder: 'Placeholder',
};
