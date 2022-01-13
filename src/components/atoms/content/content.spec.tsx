import React from 'react';
import { Content } from './content.component';
import { render } from '@testing-library/react';

describe('Box', () => {
  it('matches snapshot', () => {
    const { container } = render(<Content>Content</Content>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
