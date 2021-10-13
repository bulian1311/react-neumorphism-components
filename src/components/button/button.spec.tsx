import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './button.component';

describe('Button', () => {
  it('Default', () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('Specific type', () => {
    render(<Button type="submit">Button</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('Valid attributes', () => {
    render(<Button aria-label="Test">Button</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
  });
});
