import React from 'react';
import {styledElement} from './element.styled'

export type RenderAsTypes = typeof React.Component | React.FC<any> | 'div' | 'button' | 'input';

export interface ElementProps extends React.ComponentPropsWithoutRef<any> {
  renderAs: RenderAsTypes;
}

export const Element = React.forwardRef<HTMLElement, ElementProps>(
  ({ children, renderAs, ...props }, ref) => {
    const RenderAs = styledElement(renderAs);

    return <RenderAs ref={ref} {...props}>{children}</RenderAs>;
  },
);

Element.displayName = 'Element';
