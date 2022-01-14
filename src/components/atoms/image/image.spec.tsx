import React from 'react';
import { Image } from './image.component';
import { render } from '@testing-library/react';

describe('Image', () => {
  it('matches snapshot', () => {
    const { container } = render(<Image src="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
