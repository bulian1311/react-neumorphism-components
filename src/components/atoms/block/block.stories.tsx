import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Block as BlockComponent } from './block.component';

export default {
  title: 'Atoms/Block',
  component: BlockComponent,
  argTypes: {
    withoutBlock: {
      type: { name: 'boolean', required: false },
      name: 'Without Block',
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story = ({ withoutBlock }) => (
  <>
    {withoutBlock ? (
      <>
        <div>This text is not within a block.</div>
        <div>This text is not within a block.</div>
        <div>This text is not within a block.</div>
      </>
    ) : (
      <>
        <BlockComponent>This text is within a block.</BlockComponent>
        <BlockComponent>This text is within a block.</BlockComponent>
        <BlockComponent>This text is within a block.</BlockComponent>
      </>
    )}
  </>
);

export const Block = Template.bind({});
Block.args = {
  withoutBlock: false,
};
