import { ComponentPropsWithoutRef } from 'react';

export type RenderAsTypes = 'div' | 'button' | 'input';

export type ElementProps = ComponentPropsWithoutRef<any> & {
  renderAs: RenderAsTypes;
  shape?: 'flat' | 'pressed' | 'convex' | 'concave';
  size?: number;
};
