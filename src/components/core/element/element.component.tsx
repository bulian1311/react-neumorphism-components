import React, { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import styles from './element.module.css';

export type RenderAsTypes = 'div' | 'button' | 'input';

export interface ElementProps extends ComponentPropsWithoutRef<any> {
  renderAs: RenderAsTypes;
  shape?: 'flat' | 'pressed' | 'convex' | 'concave';
}

export const Element = React.forwardRef<any, ElementProps>(
  ({ children, renderAs, shape = 'flat', ...props }, ref) => {
    const RenderAs = renderAs;

    const classnames = cn(styles.softElement, styles.softShadow, {
      [styles.pressed]: shape === 'pressed',
      [styles.convex]: shape === 'convex',
      [styles.concave]: shape === 'concave',
    });

    return (
      <RenderAs ref={ref} {...props} className={classnames}>
        {children}
      </RenderAs>
    );
  },
);

Element.displayName = 'Element';
