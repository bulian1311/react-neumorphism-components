import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field } from '../field';

jest.mock('../../../hooks/useUniqueId');

describe('Input', () => {
  it('Applies qnique id for htmlFor attribute.', () => {
    render(
      <Field>
        <Field.Label>Input</Field.Label>
        <Field.Input />
      </Field>,
    );

    expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'unique-id');
  });
});
