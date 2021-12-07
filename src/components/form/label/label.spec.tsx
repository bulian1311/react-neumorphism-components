import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field } from '../field';

jest.mock('../../../hooks/useUniqueId');

describe('Label', () => {
  it('Applies qnique id for htmlFor attribute.', () => {
    render(
      <Field>
        <Field.Label>Label</Field.Label>
      </Field>,
    );

    //screen.debug();
    expect(screen.getByText('Label')).toHaveAttribute('for', 'unique-id');
  });
});
