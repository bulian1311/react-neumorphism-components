import React, { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import styles from './element.module.css';

export type RenderAsTypes = 'div' | 'button' | 'input';

export interface ElementProps extends ComponentPropsWithoutRef<any> {
  renderAs: RenderAsTypes;
  gradient?: boolean;
  shape?: number;
}

export const Element = React.forwardRef<any, ElementProps>(
  ({ children, renderAs, gradient = false, shape = 0, ...props }, ref) => {
    const RenderAs = renderAs;

    return (
      <RenderAs ref={ref} {...props} className={cn(styles.softElement, styles.softShadow)}>
        {children}
      </RenderAs>
    );
  },
);

Element.displayName = 'Element';
