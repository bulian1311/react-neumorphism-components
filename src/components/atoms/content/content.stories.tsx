import React from 'react';
import { Story } from '@storybook/react';

import { Content as ContentComponent } from './content.component';

export const Template: Story = () => (
  <ContentComponent>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam
      adipisci incidunt expedita!
    </p>
  </ContentComponent>
);

export const Content = Template.bind({});

Content.args = {};

Content.argTypes = {};
