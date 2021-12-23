import React from 'react';
import { Box } from './box.component';
import { render, RenderResult } from '@testing-library/react';

let documentBody: RenderResult;

describe('Block', () => {
  beforeEach(() => {
    documentBody = render(<Box>Box</Box>);
  });

  it('Should Exist', () => {
    expect(Box).toBeDefined();
  });

  it('To be in the document.', () => {
    const { getByText } = documentBody;
    expect(getByText('Box')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = documentBody;
    expect(container.firstChild).toMatchSnapshot();
  });
});
