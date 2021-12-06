import { Element } from './element.component';

import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('Default', () => {
    render(<Element renderAs="div">Div</Element>);

    expect(screen.getByText('Div')).toHaveTextContent('Div');
  });
});
