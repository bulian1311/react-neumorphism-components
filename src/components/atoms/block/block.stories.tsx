import React from 'react';
import { Story } from '@storybook/react';

import { Block as BlockComponent } from './block.component';

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

Block.argTypes = {
  withoutBlock: {
    type: { name: 'boolean', required: false },
    name: 'Without Block',
    control: { type: 'boolean' },
  },
};
