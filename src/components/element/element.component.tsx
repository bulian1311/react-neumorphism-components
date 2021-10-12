import React from 'react';
import { StyledElement } from './element.styled';

export type RenderAsTypes =
  | React.FC<React.HTMLProps<HTMLElement>>
  | 'div'
  | 'button'
  | 'input';

export interface ElementProps {
  renderAs: RenderAsTypes;
}

export const Element = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<ElementProps>
>(({ children, renderAs, ...props }, ref) => {
  const RenderAs = renderAs;

  return (
    <StyledElement component={<RenderAs></RenderAs>} ref={ref} {...props}>
      {children}
    </StyledElement>
  );
});

Element.displayName = 'Element';
