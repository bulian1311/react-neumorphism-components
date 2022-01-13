import React from 'react';
import { ButtonGroup } from './button-group.component';
import { render } from '@testing-library/react';

describe('Box', () => {
  it('matches snapshot', () => {
    const { container } = render(<ButtonGroup>Box</ButtonGroup>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
