import React from 'react';
import { Block } from './block.component';
import { render, RenderResult } from '@testing-library/react';

let documentBody: RenderResult;

describe('Block', () => {
  beforeEach(() => {
    documentBody = render(<Block>Block</Block>);
  });

  it('Should Exist', () => {
    expect(Block).toBeDefined();
  });

  it('To be in the document.', () => {
    const { getByText } = documentBody;
    expect(getByText('Block')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = documentBody;
    expect(container.firstChild).toMatchSnapshot();
  });
});
