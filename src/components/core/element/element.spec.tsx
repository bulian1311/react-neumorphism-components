import { Element } from './element.component';
import React from 'react';
import { render, RenderResult } from '@testing-library/react';

let documentBody: RenderResult;

describe('Element', () => {
  beforeEach(() => {
    documentBody = render(<Element>Element</Element>);
  });

  it('Should Exist.', () => {
    expect(Element).toBeDefined();
  });

  it('To be in the document.', () => {
    const { getByText } = documentBody;
    expect(getByText('Element')).toBeInTheDocument();
  });

  it('Render as div.', () => {
    const { container } = render(<Element renderAs="div">DivElement</Element>);
    const div = container.querySelector('div');
    expect(div).toBeInTheDocument();
  });

  it('Render as button.', () => {
    const { container } = render(
      <Element renderAs="button">ButtonElement</Element>,
    );
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('Render as input.', () => {
    const { container } = render(<Element renderAs="input" />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
  });

  it('Matches snapshot.', () => {
    const { container } = documentBody;
    expect(container.firstChild).toMatchSnapshot();
  });
});
